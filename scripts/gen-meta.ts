import type { FlatESLintConfigItem, RuleConfig } from '@antfu/eslint-define-config';

import fs from 'fs-extra';
import JITI from 'jiti';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const pluginUrlMap = {
  'eslint-comments': 'https://mysticatea.github.io/eslint-plugin-eslint-comments/',
  'import': 'https://github.com/un-es/eslint-plugin-i',
  'jsdoc': 'https://github.com/gajus/eslint-plugin-jsdoc',
  'jsonc': 'https://ota-meshi.github.io/eslint-plugin-jsonc/',
  'node': 'https://github.com/eslint-community/eslint-plugin-n',
  'style': 'https://eslint.style/',
  'ts': 'https://typescript-eslint.io/',
  'unicorn': 'https://github.com/sindresorhus/eslint-plugin-unicorn',
  'unused-imports': 'https://github.com/sweepline/eslint-plugin-unused-imports',
  'vinicunca': '/plugin-vinicunca',
  'vue': 'https://eslint.vuejs.org/',
} as Record<string, string>;

async function generateJsonRules() {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, 'scripts', 'eslint-config.js');

  const jiti = JITI(cwd, {
    cache: false,
  });

  const eslintRules = await import('eslint/use-at-your-own-risk').then((r) => r.default.builtinRules);

  const rawConfigs = jiti(configPath).default as Array<FlatESLintConfigItem & { name?: string }>;

  const rulesMap = new Map<string, any>();

  for (const [name, rule] of eslintRules.entries()) {
    rulesMap.set(name, {
      ...(rule as any).meta as any,
      messages: undefined,
      name,
      plugin: 'eslint',
      schema: undefined,
    });
  }

  for (const rawConfig of rawConfigs) {
    for (const [prefix, plugin] of Object.entries(rawConfig.plugins ?? {})) {
      for (const [name, rule] of Object.entries(plugin.rules ?? {})) {
        rulesMap.set(`${prefix}/${name}`, {
          ...(rule as any).meta as any,
          messages: undefined,
          name: `${prefix}/${name}`,
          schema: undefined,
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
        languageOptions: undefined,
        plugins: rawConfig.plugins
          ? transformedPlugins
          : undefined,
        processor: undefined,
        rules,
      };

      OUTPUT[configName].push(outputMeta);
    }
  }

  writeJson(OUTPUT);
}

generateJsonRules();

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

  return fs.writeJSON(filePath, content, { EOL: '\n', spaces: 2 });
}
