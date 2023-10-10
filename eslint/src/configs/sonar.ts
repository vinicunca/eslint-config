import type { ConfigItem } from '../types';

// import { pluginSonar } from '../plugins';

export const sonar: ConfigItem[] = [
  {
    plugins: {
      // sonar: pluginSonar,
    },

    rules: {
      // ...pluginSonar.configs.recommended.rules as any,
    },
  },
];
