import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import JITI from 'jiti';
import type { FlatESLintConfigItem, RuleConfig } from '@antfu/eslint-define-config';

const pluginUrlMap = {
  'eslint-comments': 'https://mysticatea.github.io/eslint-plugin-eslint-comments/',
  'node': 'https://github.com/eslint-community/eslint-plugin-n',
  'jsdoc': 'https://github.com/gajus/eslint-plugin-jsdoc',
  'import': 'https://github.com/un-es/eslint-plugin-i',
  'unicorn': 'https://github.com/sindresorhus/eslint-plugin-unicorn',
  'ts': 'https://typescript-eslint.io/',
  'vue': 'https://eslint.vuejs.org/',
  'jsonc': 'https://ota-meshi.github.io/eslint-plugin-jsonc/',
  'unused-imports': 'https://github.com/sweepline/eslint-plugin-unused-imports',
  'style': 'https://eslint.style/',
  'vinicunca': '/plugin-vinicunca',
} as Record<string, string>;

async function generateJsonRules() {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, 'eslint.config.js');

  const jiti = JITI(cwd, {
    cache: false,
  });

  const eslintRules = await import('eslint/use-at-your-own-risk').then((r) => r.default.builtinRules);

  const rawConfigs = jiti(configPath).default as Array<FlatESLintConfigItem & { name?: string }>;

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
    if (rawConfig.name) {
      const [, configName] = rawConfig.name.split(':');

      OUTPUT[configName] = OUTPUT[configName] || [];

      let rules;

      if (rawConfig.rules) {
        rules = {};

        Object.keys(rawConfig.rules).forEach((rule) => {
          const meta = rulesMap.get(rule);
          const userConfig = rawConfig.rules![rule];

          const level = getRuleLevel(userConfig);
          const options = getRuleOptions(userConfig);

          rules[rule] = {
            ...meta,
            level,
            options,
          };
        });
      }

      const transformedPlugins = Object.fromEntries(
        Object.entries(rawConfig.plugins ?? {}).map(
          ([prefix]) => [prefix, {
            url: pluginUrlMap[prefix],
          }],
        ),
      );

      const outputMeta = {
        ...rawConfig,
        rules,
        plugins: rawConfig.plugins
          ? transformedPlugins
          : undefined,
        processor: undefined,
        languageOptions: undefined,
      };

      OUTPUT[configName].push(outputMeta);
    }
  }

  writeJson(OUTPUT);
}

generateJsonRules(); ;

export function getRuleLevel(level: RuleConfig | undefined) {
  const first = Array.isArray(level) ? level[0] : level;
  switch (first) {
    case 0:
    case 'off':
      return 'off';
    case 1:
    case 'warn':
      return 'warn';
    case 2:
    case 'error':
      return 'error';
  }
}

export function getRuleOptions<T extends any[]>(level: RuleConfig<T> | undefined): T | undefined {
  if (Array.isArray(level)) {
    return level.slice(1) as T;
  };
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function writeJson(content: any) {
  const docsDataDir = path.resolve(__dirname, '../docs');

  const filePath = path.resolve(__dirname, docsDataDir, 'metadata.json');

  return fs.writeJSON(filePath, content, { spaces: 2, EOL: '\n' });
}
