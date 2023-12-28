import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: true,
    ignores: [
      '**/fixtures',
      '**/_fixtures',
    ],
    typescript: true,

    vue: true,
  },

  {
    files: ['**/*.md'],
    rules: {
      'perfectionist/sort-objects': 'off',
    },
  },
);
