import type { OptionsStylistic, TypedFlatConfigItem } from '../types';

import { ERROR } from '../flags';
import { pluginAntfu } from '../plugins';

export async function imports(
  _options: OptionsStylistic = {},
): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      name: 'vinicunca/imports/rules',

      plugins: {
        antfu: pluginAntfu,
      },

      rules: {
        'antfu/import-dedupe': ERROR,
        'antfu/no-import-dist': ERROR,
        'antfu/no-import-node-modules-by-path': ERROR,
      },
    },
  ];
}
