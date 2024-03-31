import { builtinRules } from 'eslint/use-at-your-own-risk';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import fs from 'node:fs/promises';

import { combineConfigs, comments, formatters, imports, javascript, jsdoc, jsonc, markdown, node, perfectionist, react, sortPackageJson, stylistic, test, typescript, unicorn, unocss, vue, yaml } from '../src';

const configs = await combineConfigs(
  {
    plugins: {
      '': {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  comments(),
  formatters(),
  imports(),
  javascript(),
  jsdoc(),
  jsonc(),
  markdown(),
  perfectionist(),
  node(),
  react(),
  sortPackageJson(),
  stylistic(),
  test(),
  typescript(),
  unicorn(),
  unocss(),
  vue(),
  yaml(),
);

const dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
});

await fs.writeFile('src/typegen.d.ts', dts);
