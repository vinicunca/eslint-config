import type { TypedFlatConfigItem } from '../types';
import { OFF } from '../flags';
import { GLOB_SRC } from '../globs';
import { pluginSonar } from '../plugins';

export async function sonar(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      files: [GLOB_SRC],

      name: 'vinicunca/sonar/rules',

      plugins: {
        sonar: pluginSonar,
      },

      rules: {
        ...(pluginSonar.configs?.recommended as any).rules,

        'sonar/cognitive-complexity': OFF,
        'sonar/no-unused-import': OFF,
        'sonar/no-unused-vars': OFF,
        'sonar/pseudo-random': OFF,
        'sonar/slow-regex': OFF,
        'sonar/todo-tag': OFF,
      },
    },
  ];
};
