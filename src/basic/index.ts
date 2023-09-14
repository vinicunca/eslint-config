import { type FlatESLintConfigItem } from 'eslint-define-config';
import globals from 'globals'

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
  },
];

export default basicConfig;
