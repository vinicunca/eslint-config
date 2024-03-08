import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  formatters: true,
  react: true,

  typescript: {
    tsconfigPath: ['tsconfig.eslint.json'],
  },
});
