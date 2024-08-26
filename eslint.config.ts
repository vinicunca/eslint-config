import styleMigrate from '@stylistic/eslint-plugin-migrate';

import { vinicuncaESLint } from './eslint/src';

export default vinicuncaESLint(
  {
    vue: true,
    react: true,
    solid: true,
    svelte: true,
    astro: true,
    typescript: true,
    formatters: true,
    type: 'lib',

    rules: {
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-interfaces': 'off',
      'sonar/cognitive-complexity': 'off',
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
);
