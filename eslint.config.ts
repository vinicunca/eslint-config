import styleMigrate from '@stylistic/eslint-plugin-migrate';

import { vinicuncaESLint } from './eslint/src';

export default vinicuncaESLint(
  {
    vue: true,
    typescript: true,
    formatters: true,
    type: 'lib',

    rules: {
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-interfaces': 'off',
      'sonar/cognitive-complexity': 'off',
      'sonar/no-duplicate-string': 'off',
    },
  },

  {
    ignores: [
      'eslint/fixtures',
      'eslint/_fixtures',
    ],
  },

  {
    files: ['src/configs/*.ts'],
    plugins: {
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  },

  {
    files: ['**/docs/**'],
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
);
