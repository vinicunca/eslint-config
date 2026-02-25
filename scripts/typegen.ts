import fs from 'node:fs/promises';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { vinicuncaESLint } from '../src/base';
import { CONFIG_PRESET_FULL_ON } from '../src/config-presets';

const configs = await vinicuncaESLint(CONFIG_PRESET_FULL_ON)
  .prepend(
    {
      plugins: {
        '': {
          rules: Object.fromEntries(builtinRules.entries()),
        },
      },
    },
  );

const configNames = configs.map((i) => i.name).filter(Boolean) as Array<string>;

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
});

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(' | ')}
`;

await fs.writeFile('src/typegen.d.ts', dts);
