import type { TypedFlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { pluginAntfu, pluginImport } from '../plugins';

export async function imports(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      name: 'vinicunca/imports/rules',

      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
      },

      rules: {
        'import/export': ERROR,

        'import/first': ERROR,

        'import/newline-after-import': [OFF, {
          considerComments: true,
          count: 1,
        }],

        'import/no-duplicates': ERROR,

        'import/no-mutable-exports': ERROR,

        'import/no-named-default': ERROR,

        'import/no-self-import': ERROR,

        'import/no-webpack-loader-syntax': ERROR,

        // Turned off to avoid conflicts with Perfectionist. https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
        'import/order': OFF,
      },
    },
  ];
}
