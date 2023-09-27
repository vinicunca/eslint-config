import { type FlatESLintConfigItem } from 'eslint-define-config';
import { pluginImport } from '../plugins';
import { ERROR } from '../flags';

export function imports(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/export': ERROR,
        'import/first': ERROR,
        'import/newline-after-import': [ERROR, { considerComments: true, count: 1 }],
        'import/no-duplicates': ERROR,
        'import/no-mutable-exports': ERROR,
        'import/no-named-default': ERROR,
        'import/no-self-import': ERROR,
        'import/no-webpack-loader-syntax': ERROR,
        'import/order': ERROR,
      },
    },
  ];
}
