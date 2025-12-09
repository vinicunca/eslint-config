import type { TypedFlatConfigItem } from '../types';
import { OFF } from '../flags';
import { pluginSonar } from '../plugins';

export async function sonar(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      name: 'vinicunca/sonar/rules',
      plugins: {
        sonar: pluginSonar,
      },

      rules: {
        ...pluginSonar.configs.recommended.rules,

        'sonar/todo-tag': OFF,
        'sonar/pseudo-random': OFF,
        'sonar/slow-regex': OFF,
        'sonar/cognitive-complexity': OFF,
        'sonar/no-unused-vars': OFF,
      },
    },
  ];
};
