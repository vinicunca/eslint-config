import { vinicuncaESLint } from './eslint/src';

export default vinicuncaESLint(
  {
    vue: {
      a11y: true,
    },
    typescript: true,
    formatters: true,
    type: 'lib',
    pnpm: true,

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
    files: ['**/docs/**'],
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
);
