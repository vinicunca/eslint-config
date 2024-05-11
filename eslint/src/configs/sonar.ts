import type { TypedFlatConfigItem } from 'src/types';

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
      },
    },
  ];
};
