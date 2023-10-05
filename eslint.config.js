import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    ignores: {
      items: [
        '**/fixtures',
      ],
    },

    react: true,
  },
});
