import { pluginImport, pluginVinicunca } from '../plugins';
import { ERROR } from '../flags';
import { type FlatESLintConfigItem } from '../types';

export function imports(): FlatESLintConfigItem[] {
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

        'import/newline-after-import': [ERROR, {
          considerComments: true,
          count: 1,
        }],

        'import/no-duplicates': ERROR,

        'import/no-mutable-exports': ERROR,

        'import/no-named-default': ERROR,

        'import/no-self-import': ERROR,

        'import/no-webpack-loader-syntax': ERROR,

        'import/order': ERROR,

        'vinicunca/import-dedupe': ERROR,

        'vinicunca/no-import-node-modules-by-path': ERROR,
      },
    },
  ];
}
