import type { FlatESLintConfigItem, RuleConfig } from '@antfu/eslint-define-config';
import type { Rule } from 'eslint';

import fs from 'fs-extra';
import JITI from 'jiti';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import type { ConfigInfo, RuleInfo } from '../metadata/src/types';

import { GLOB_EXCLUDE } from '../eslint/src/globs';

/**
 * First we store the rules into a Map
 */
const rulesMap = new Map<string, Rule.RuleModule['meta']>();

async function setRulesMap(rawConfigs: RawConfigs) {
  const eslintRules = await import('eslint/use-at-your-own-risk')
    .then((r) => r.default.builtinRules);

  for (const [name, rule] of eslintRules.entries()) {
    const cloned = { ...rule.meta };
    delete cloned.messages;
    delete cloned.schema;

    rulesMap.set(name, cloned);
  }

  for (const rawConfig of rawConfigs) {
    for (const [prefix, plugin] of Object.entries(rawConfig.plugins ?? {})) {
      for (const [name, rule] of Object.entries(plugin.rules ?? {})) {
        const cloned = { ...(rule as Rule.RuleModule).meta };
        delete cloned.messages;
        delete cloned.schema;

        rulesMap.set(`${prefix}/${name}`, cloned);
      }
    }
  }
}

type RawConfigs = Array<FlatESLintConfigItem & { name?: string }>;

async function generateJsonRules() {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, 'scripts', 'eslint-config.js');

  const jiti = JITI(cwd, {
    cache: false,
  });

  const rawConfigs = await jiti(configPath).default as RawConfigs;

  await setRulesMap(rawConfigs);

  const OUTPUT: Array<ConfigInfo> = [];

  for (const rawConfig of rawConfigs) {
    if (rawConfig.name) {
      const rules: Array<RuleInfo> = [];

      if (rawConfig.rules) {
        Object.keys(rawConfig.rules).forEach((rule) => {
          const meta = rulesMap.get(rule);
          const userConfig = rawConfig.rules![rule];

          const level = getRuleLevel(userConfig)!;
          const options = getRuleOptions(userConfig);

          rules[rule] = {
            ...meta,
            level,
            options,
          };

          rules.push({
            level,
            meta,
            name: rule,
            options,
          });
        });
      }

      OUTPUT.push({
        files: rawConfig.files,
        name: rawConfig.name,
        plugins: Object.keys(rawConfig.plugins ?? {}),
        rules,
      });
    }
  }

  writeJson(OUTPUT);
}

generateJsonRules();

function getRuleLevel(level: RuleConfig | undefined) {
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

function getRuleOptions<T extends Array<any>>(level: RuleConfig<T> | undefined): Array<any> {
  if (Array.isArray(level)) {
    return level.slice(1) as T;
  };

  return [];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cwd = process.cwd();

async function writeJson(content: any) {
  const docsDataDir = path.resolve(__dirname, '../docs');

  const filePath = path.resolve(__dirname, docsDataDir, 'metadata2.json');

  await fs.writeFile(
    path.join(cwd, 'metadata', 'src', 'metadata.ts'),
  `
import type { ConfigInfo } from './types';

export const configs: ReadonlyArray<ConfigInfo> = Object.freeze(${JSON.stringify(content, null, 2)});

export const GLOB_EXCLUDE = Object.freeze(${JSON.stringify(GLOB_EXCLUDE)})
`.trimStart(),
  'utf-8',
  );

  return fs.writeJSON(filePath, content, { EOL: '\n', spaces: 2 });
}
