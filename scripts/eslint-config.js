import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  astro: true,
  formatters: true,
  react: true,
  vue: true,
  jsx: true,
  stylistic: true,
  regexp: true,
  test: true,
  solid: true,
  svelte: true,
  unocss: true,
  jsonc: true,
  yaml: true,
  toml: true,
  markdown: true,
  typescript: {
    tsconfigPath: ['tsconfig.eslint.json'],
  },
});
