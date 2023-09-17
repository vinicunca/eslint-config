import { type FlatESLintConfigItem } from 'eslint-define-config';
import globals from 'globals'

// @ts-expect-error missing type
import pluginN from 'eslint-plugin-n';

const basicConfig: FlatESLintConfigItem[] = [
  {
    languageOptions: {
      ecmaVersion: 2022,
  
      sourceType: 'module',
  
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
  
      globals: {
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      },
    },

    plugins: {
      n: pluginN,
    },

    rules: {
      'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    }
  },
];

export default basicConfig;
