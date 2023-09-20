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
      /**
       * --------- Possible Problems ---------
       */
      'array-callback-return': ['error', { checkForEach: true }],

      'constructor-super': 'error',
      
      /**
       * --------- Suggestions ---------
       */
      'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
      
      /**
       * --------- Layout & Formatting ---------
       */
      'array-bracket-newline': ['error', 'consistent'],

      'array-bracket-spacing': ['error', 'never'],

      'array-element-newline': ['error', 'consistent'],

      'arrow-parens': ['error', 'always'],
    }
  },
];

export default basicConfig;
