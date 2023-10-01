import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import JITI from 'jiti';
import { type FlatESLintConfigItem } from 'eslint-define-config';

async function generateJsonRules() {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, 'eslint.config.js');

  const jiti = JITI(cwd, {
    cache: false,
  });

  const eslintRules = await import('eslint/use-at-your-own-risk').then((r) => r.default.builtinRules);

  const rawConfigs = jiti(configPath).default as FlatESLintConfigItem[];

  const rulesMap = new Map<string, any>();

  for (const [name, rule] of eslintRules.entries()) {
    rulesMap.set(name, {
      ...(rule as any).meta as any,
      name,
      plugin: 'eslint',
      schema: undefined,
      messages: undefined,
    });
  }

  for (const rawConfig of rawConfigs) {
    for (const [prefix, plugin] of Object.entries(rawConfig.plugins ?? {})) {
      for (const [name, rule] of Object.entries(plugin.rules ?? {})) {
        rulesMap.set(`${prefix}/${name}`, {
          ...(rule as any).meta as any,
          name: `${prefix}/${name}`,
          schema: undefined,
          messages: undefined,
        });
      }
    }
  }

  const OUTPUT: any = {};

  for (const rawConfig of rawConfigs) {
    const [, configName] = rawConfig.name.split(':');

    OUTPUT[configName] = OUTPUT[configName] || [];

    let rules;

    if (rawConfig.rules) {
      rules = {};

      Object.keys(rawConfig.rules).forEach((rule) => {
        const meta = rulesMap.get(rule);

        rules[rule] = {
          ...meta.docs,
          options: rawConfig.rules![rule],
        };
      });
    }

    const outputMeta = {
      ...rawConfig,
      rules,
      plugins: rawConfig.plugins
        ? Object.fromEntries(Object.entries(rawConfig.plugins ?? {}).map(([prefix]) => [prefix, {}]))
        : undefined,
      processor: undefined,
      languageOptions: undefined,
    };

    if (rawConfig.rules || rawConfig.ignores) {
      OUTPUT[configName].push(outputMeta);
    }
  }

  writeJson(OUTPUT);
}

generateJsonRules();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function writeJson(content: any) {
  const docsDataDir = path.resolve(__dirname, '../docs');

  const filePath = path.resolve(__dirname, docsDataDir, 'metadata.json');

  return fs.writeJSON(filePath, content, { spaces: 2, EOL: '\n' });
}
