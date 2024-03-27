import type { FlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { pluginImport, pluginVinicunca } from '../plugins';

export async function imports(): Promise<Array<FlatConfigItem>> {
  return [
    {
      name: 'vinicunca:imports',

      plugins: {
        import: pluginImport,
        vinicunca: pluginVinicunca,
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

        'vinicunca/import-dedupe': ERROR,

        'vinicunca/no-import-node-modules-by-path': ERROR,
      },
    },
  ];
}
