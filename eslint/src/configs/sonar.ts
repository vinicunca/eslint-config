import { type FlatESLintConfigItem } from 'eslint-define-config';

// import { pluginSonar } from '../plugins';

export const sonar: FlatESLintConfigItem[] = [
  {
    plugins: {
      // sonar: pluginSonar,
    },

    rules: {
      // ...pluginSonar.configs.recommended.rules as any,
    },
  },
];
