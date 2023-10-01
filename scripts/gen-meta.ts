import process from 'node:process';
import JITI from 'jiti';
import path from 'node:path';
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

  const configs = rawConfigs.map((rawConfig): FlatESLintConfigItem => {
    let rules;

    if (rawConfig.rules) {
      rules = {};

      Object.keys(rawConfig.rules).forEach((rule) => {
        const meta = rulesMap.get(rule);

        rules[rule] = {
          ...meta.docs,
          options: rawConfig.rules![rule],
        }
      });
    }

    return {
      ...rawConfig,
      rules,
      plugins: rawConfig.plugins
          ? Object.fromEntries(Object.entries(rawConfig.plugins ?? {}).map(([prefix]) => [prefix, {}]))
          : undefined,
      processor: undefined,
      languageOptions: undefined,
    };
  });
  console.log(`🚀 ~ configs ~ configs:`, configs);

  // console.log(`🚀 ~ configs ~ configs:`, configs);
}

generateJsonRules();
