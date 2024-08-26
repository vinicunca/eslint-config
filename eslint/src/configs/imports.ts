import type { OptionsStylistic, TypedFlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_SRC_EXT } from '../globs';
import { pluginAntfu, pluginImport } from '../plugins';

export async function imports(
  options: OptionsStylistic = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    stylistic = true,
  } = options;

  return [
    {
      name: 'vinicunca/imports/rules',

      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
      },

      rules: {
        'antfu/import-dedupe': ERROR,
        'antfu/no-import-dist': ERROR,
        'antfu/no-import-node-modules-by-path': ERROR,

        'import/export': ERROR,
        'import/first': ERROR,
        'import/no-duplicates': ERROR,
        'import/no-mutable-exports': ERROR,
        'import/no-named-default': ERROR,
        'import/no-self-import': ERROR,
        'import/no-webpack-loader-syntax': ERROR,

        // Turned off to avoid conflicts with Perfectionist. https://eslint-plugin-perfectionist.azat.io/rules/sort-imports
        'import/order': OFF,

        ...stylistic
          ? {
              'import/newline-after-import': [ERROR, {
                count: 1,
                considerComments: true,
              }],
            }
          : {},
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'vinicunca/imports/disables/bin',
      rules: {
        'antfu/no-import-dist': OFF,
        'antfu/no-import-node-modules-by-path': OFF,
      },
    },
  ];
}
