import globals from 'globals';
import type { FlatESLintConfigItem } from 'eslint-define-config';
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';
import { pluginUnusedImports, pluginVinicunca } from '../plugins';
import type { OptionsIsInEditor } from '../types';
import { ALWAYS, ERROR, NEVER, OFF, WARN } from '../flags';

const rulesProblems: FlatESLintConfigItem['rules'] = {
  'array-callback-return': [ERROR, { checkForEach: true }],

  'constructor-super': ERROR,

  'for-direction': ERROR,

  'no-async-promise-executor': ERROR,

  'no-await-in-loop': ERROR,

  'no-class-assign': ERROR,

  'no-compare-neg-zero': ERROR,

  'no-cond-assign': [ERROR, 'always'],

  'no-const-assign': ERROR,

  'no-constant-binary-expression': ERROR,

  'no-constant-condition': [ERROR, { checkLoops: false }],

  'no-constructor-return': ERROR,

  'no-control-regex': ERROR,

  'no-debugger': ERROR,

  'no-dupe-args': ERROR,

  'no-dupe-class-members': ERROR,

  'no-dupe-else-if': ERROR,

  'no-dupe-keys': ERROR,

  'no-duplicate-case': ERROR,

  'no-empty-character-class': ERROR,

  'no-empty-pattern': ERROR,

  'no-ex-assign': ERROR,

  'no-fallthrough': ERROR,

  'no-func-assign': ERROR,

  'no-import-assign': ERROR,

  'no-invalid-regexp': ERROR,

  'no-irregular-whitespace': ERROR,

  'no-loss-of-precision': ERROR,

  'no-misleading-character-class': ERROR,

  'no-new-symbol': ERROR,

  'no-obj-calls': ERROR,

  'no-promise-executor-return': ERROR,

  'no-prototype-builtins': ERROR,

  'no-self-assign': [ERROR, { props: true }],

  'no-self-compare': ERROR,

  'no-sparse-arrays': ERROR,

  'no-template-curly-in-string': ERROR,

  'no-this-before-super': ERROR,

  'no-undef': ERROR,

  'no-unexpected-multiline': ERROR,

  'no-unmodified-loop-condition': ERROR,

  'no-unreachable': ERROR,

  'no-unreachable-loop': ERROR,

  'no-unsafe-finally': ERROR,

  'no-unsafe-negation': ERROR,

  'no-unused-vars': [ERROR, {
    args: 'none',
    caughtErrors: 'none',
    ignoreRestSiblings: true,
    vars: 'all',
  }],

  'no-use-before-define': [ERROR, {
    functions: false,
    classes: false,
    variables: true,
  }],

  'no-useless-backreference': ERROR,

  'use-isnan': [ERROR, {
    enforceForSwitchCase: true,
    enforceForIndexOf: true,
  }],

  'valid-typeof': [ERROR, { requireStringLiterals: true }],
};

const rulesSuggestions: FlatESLintConfigItem['rules'] = {
  'accessor-pairs': [ERROR, { setWithoutGet: true, enforceForClassMembers: true }],

  'block-scoped-var': ERROR,

  'camelcase': [ERROR, {
    allow: ['^UNSAFE_'],
    properties: 'never',
    ignoreGlobals: true,
  }],

  'curly': [ERROR, 'all'],

  'default-case-last': ERROR,

  'dot-notation': [ERROR, { allowKeywords: true }],

  'eqeqeq': [ERROR, 'smart'],

  'new-cap': [ERROR, { capIsNew: false, properties: true }],

  'no-alert': WARN,

  'no-array-constructor': ERROR,

  'no-caller': ERROR,

  'no-case-declarations': ERROR,

  'no-console': [ERROR, { allow: [WARN, ERROR] }],

  'no-delete-var': ERROR,

  'no-empty': [ERROR, { allowEmptyCatch: true }],

  'no-eval': ERROR,

  'no-extend-native': ERROR,

  'no-extra-bind': ERROR,

  'no-extra-boolean-cast': ERROR,

  'no-floating-decimal': ERROR,

  'no-global-assign': ERROR,

  'no-implied-eval': ERROR,

  'no-invalid-this': ERROR,

  'no-iterator': ERROR,

  'no-labels': [ERROR],

  'no-lone-blocks': ERROR,

  'no-mixed-operators': [ERROR, {
    groups: [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
    allowSamePrecedence: true,
  }],

  'no-multi-str': ERROR,

  'no-nested-ternary': ERROR,

  'no-new': ERROR,

  'no-new-func': ERROR,

  'no-object-constructor': ERROR,

  'no-new-wrappers': ERROR,

  'no-octal': ERROR,

  'no-octal-escape': ERROR,

  'no-proto': ERROR,

  'no-redeclare': [ERROR, { builtinGlobals: false }],

  'no-regex-spaces': ERROR,

  'no-restricted-globals': [
    ERROR,
    { name: 'global', message: 'Use `globalThis` instead.' },
    { name: 'self', message: 'Use `globalThis` instead.' },
  ],

  'no-restricted-properties': [
    ERROR,
    { property: '__proto__', message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.' },
    { property: '__defineGetter__', message: 'Use `Object.defineProperty` instead.' },
    { property: '__defineSetter__', message: 'Use `Object.defineProperty` instead.' },
    { property: '__lookupGetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
    { property: '__lookupSetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
  ],

  'no-restricted-syntax': [
    ERROR,
    'DebuggerStatement',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],

  'no-return-assign': [ERROR, 'always'],

  'no-sequences': ERROR,

  'no-shadow-restricted-names': ERROR,

  'no-throw-literal': ERROR,

  'no-undef-init': ERROR,

  'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],

  'no-unused-expressions': [ERROR, {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true,
  }],

  'no-useless-call': ERROR,

  'no-useless-catch': ERROR,

  'no-useless-computed-key': ERROR,

  'no-useless-constructor': ERROR,

  'no-useless-rename': ERROR,

  'no-useless-return': ERROR,

  'no-var': ERROR,

  'no-void': ERROR,

  'no-with': ERROR,

  'object-shorthand': [ERROR, 'always', {
    ignoreConstructors: false,
    avoidQuotes: true,
  }],

  'one-var': [ERROR, { initialized: 'never' }],

  'prefer-arrow-callback': [ERROR],

  'prefer-const': [ERROR, {
    destructuring: 'all',
    ignoreReadBeforeAssign: true,
  }],

  'prefer-exponentiation-operator': ERROR,

  'prefer-promise-reject-errors': ERROR,

  'prefer-regex-literals': [ERROR, { disallowRedundantWrapping: true }],

  'prefer-rest-params': ERROR,

  'prefer-spread': ERROR,

  'prefer-template': ERROR,

  'quote-props': [ERROR, 'consistent-as-needed'],

  'sort-imports': [
    ERROR,
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    },
  ],

  'symbol-description': ERROR,

  'vars-on-top': ERROR,

  'yoda': [ERROR, 'never'],
};

const rulesLayout: FlatESLintConfigItem['rules'] = {
  'arrow-parens': [ERROR, ALWAYS],

  'eol-last': ERROR,

  'max-statements-per-line': [ERROR, { max: 1 }],

  'new-parens': ERROR,

  'no-extra-parens': [ERROR, 'functions'],

  'quotes': [ERROR, 'single'],

  'semi': [ERROR, ALWAYS],

  'wrap-iife': [ERROR, 'any', { functionPrototypeMethods: true }],

  'unicode-bom': [ERROR, NEVER],
};

const rulesVinicunca: FlatESLintConfigItem['rules'] = {
  'vinicunca/import-dedupe': ERROR,
  'vinicunca/no-import-node-modules-by-path': ERROR,
  'vinicunca/top-level-function': ERROR,
};

export function javascript(options: OptionsIsInEditor = {}): FlatESLintConfigItem[] {
  const rulesUnusedImports: FlatESLintConfigItem['rules'] = {
    'unused-imports/no-unused-imports': options.isInEditor ? OFF : ERROR,
    'unused-imports/no-unused-vars': [
      WARN,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  };

  return [
    {
      languageOptions: {
        ecmaVersion: 2022,

        globals: {
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },

        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: 2022,
          sourceType: 'module',
        },

        sourceType: 'module',
      },

      plugins: {
        'vinicunca': pluginVinicunca,
        'unused-imports': pluginUnusedImports,
      },

      rules: {
        ...rulesProblems,
        ...rulesSuggestions,
        ...rulesLayout,
        ...rulesUnusedImports,
        ...rulesVinicunca,
      },
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      rules: {
        'no-console': OFF,
      },
    },
  ];
}

