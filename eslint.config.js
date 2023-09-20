import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint({
  options: {
    react: true,
  },
  userConfigs: [
    {
      ignores: [
        '**/fixtures',
      ],
    },
  ],
});
