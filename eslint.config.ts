import { vinicuncaESLint } from './src';

export default vinicuncaESLint(
  {
    vue: {
      a11y: true,
    },
    react: true,
    solid: true,
    svelte: true,
    astro: true,
    nextjs: false,
    typescript: {
      erasableOnly: true,
    },
    antislop: true,
    markdown: {
      overrides: {
        'no-dupe-keys': 'off',
      },
    },
    formatters: true,
    perfectionist: true,
    pnpm: true,
    type: 'lib',
    jsx: {
      a11y: true,
    },
  },
  {
    ignores: [
      'fixtures',
      '_fixtures',
      '**/constants-generated.ts',
    ],
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
  {
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
);
