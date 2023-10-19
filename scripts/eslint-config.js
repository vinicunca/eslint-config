import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    react: true,

    typescript: {
      tsconfigPath: ['tsconfig.eslint.json'],
    },
  },
});
