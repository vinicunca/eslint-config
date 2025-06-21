import type { OptionsOverrides, OptionsStylistic, TypedFlatConfigItem } from '../types';
import { ERROR } from '../flags';

import { pluginAntfu, pluginImportLite } from '../plugins';

export async function imports(
  options: OptionsOverrides & OptionsStylistic = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    overrides = {},
    stylistic = true,
  } = options;

  return [
    {
      name: 'vinicunca/imports/rules',

      plugins: {
        antfu: pluginAntfu,
        import: pluginImportLite,
      },

      rules: {
        'antfu/import-dedupe': ERROR,
        'antfu/no-import-dist': ERROR,
        'antfu/no-import-node-modules-by-path': ERROR,

        'import/consistent-type-specifier-style': ['error', 'top-level'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {},

        ...overrides,
      },
    },
  ];
}
