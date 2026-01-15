import type { OptionsIsInEditor, OptionsOverrides, TypedFlatConfigItem } from '../types';

import globals from 'globals';

import {
  ALWAYS,
  ERROR,
  NEVER,
  OFF,
  WARN,
} from '../flags';
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';
import { pluginAntfu, pluginUnusedImports } from '../plugins';

export async function javascript(
  options: OptionsIsInEditor & OptionsOverrides = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    isInEditor = false,
    overrides = {},
  } = options;

  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',

        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },

        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },

        sourceType: 'module',
      },

      linterOptions: {
        reportUnusedDisableDirectives: true,
      },

      name: 'vinicunca/javascript/setup',
    },
    {
      name: 'vinicunca/javascript/rules',

      plugins: {
        'antfu': pluginAntfu,
        'unused-imports': pluginUnusedImports,
      },

      rules: {
        'accessor-pairs': [ERROR, { enforceForClassMembers: true, setWithoutGet: true }],

        'antfu/no-top-level-await': ERROR,

        'array-callback-return': ERROR,
        'block-scoped-var': ERROR,
        'constructor-super': ERROR,
        'default-case-last': ERROR,
        'dot-notation': [ERROR, { allowKeywords: true }],
        'eqeqeq': [ERROR, 'smart'],
        'new-cap': [ERROR, { capIsNew: false, newIsCap: true, properties: true }],
        'no-alert': ERROR,
        'no-array-constructor': ERROR,
        'no-async-promise-executor': ERROR,
        'no-caller': ERROR,
        'no-case-declarations': ERROR,
        'no-class-assign': ERROR,
        'no-compare-neg-zero': ERROR,
        'no-cond-assign': [ERROR, 'always'],
        'no-console': [ERROR, { allow: ['warn', ERROR] }],
        'no-const-assign': ERROR,
        'no-control-regex': ERROR,
        'no-debugger': ERROR,
        'no-delete-var': ERROR,
        'no-dupe-args': ERROR,
        'no-dupe-class-members': ERROR,
        'no-dupe-keys': ERROR,
        'no-duplicate-case': ERROR,
        'no-empty': [ERROR, { allowEmptyCatch: true }],
        'no-empty-character-class': ERROR,
        'no-empty-pattern': ERROR,
        'no-eval': ERROR,
        'no-ex-assign': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-extra-boolean-cast': ERROR,
        'no-fallthrough': ERROR,
        'no-func-assign': ERROR,
        'no-global-assign': ERROR,
        'no-implied-eval': ERROR,
        'no-import-assign': ERROR,
        'no-invalid-regexp': ERROR,
        'no-irregular-whitespace': ERROR,
        'no-iterator': ERROR,
        'no-labels': [ERROR, { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': ERROR,
        'no-loss-of-precision': ERROR,
        'no-misleading-character-class': ERROR,
        'no-multi-str': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-native-nonconstructor': ERROR,
        'no-new-wrappers': ERROR,
        'no-obj-calls': ERROR,
        'no-octal': ERROR,
        'no-octal-escape': ERROR,
        'no-proto': ERROR,
        'no-prototype-builtins': ERROR,
        'no-redeclare': [ERROR, { builtinGlobals: false }],
        'no-regex-spaces': ERROR,
        'no-restricted-globals': [
          ERROR,
          { message: 'Use `globalThis` instead.', name: 'global' },
          { message: 'Use `globalThis` instead.', name: 'self' },
        ],
        'no-restricted-properties': [
          ERROR,
          { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
          { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
          { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
          { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
          { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
        ],
        'no-restricted-syntax': [
          ERROR,
          'TSEnumDeclaration[const=true]',
          'TSExportAssignment',
        ],
        'no-self-assign': [ERROR, { props: true }],
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-sparse-arrays': ERROR,
        'no-template-curly-in-string': ERROR,
        'no-this-before-super': ERROR,
        'no-throw-literal': ERROR,
        'no-undef': ERROR,
        'no-undef-init': ERROR,
        'no-unexpected-multiline': ERROR,
        'no-unmodified-loop-condition': ERROR,
        'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],
        'no-unreachable': ERROR,
        'no-unreachable-loop': ERROR,
        'no-unsafe-finally': ERROR,
        'no-unsafe-negation': ERROR,
        'no-unused-expressions': [ERROR, {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        }],
        'no-unused-vars': [ERROR, {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        }],
        'no-use-before-define': [ERROR, { classes: false, functions: false, variables: true }],
        'no-useless-backreference': ERROR,
        'no-useless-call': ERROR,
        'no-useless-catch': ERROR,
        'no-useless-computed-key': ERROR,
        'no-useless-constructor': ERROR,
        'no-useless-rename': ERROR,
        'no-useless-return': ERROR,
        'no-var': ERROR,
        'no-with': ERROR,
        'object-shorthand': [
          ERROR,
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'one-var': [ERROR, { initialized: 'never' }],
        'prefer-arrow-callback': [
          ERROR,
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'prefer-const': [
          isInEditor ? 'warn' : ERROR,
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-exponentiation-operator': ERROR,
        'prefer-promise-reject-errors': ERROR,
        'prefer-regex-literals': [ERROR, { disallowRedundantWrapping: true }],
        'prefer-rest-params': ERROR,
        'prefer-spread': ERROR,
        'prefer-template': ERROR,
        'symbol-description': ERROR,
        'unicode-bom': [ERROR, 'never'],
        'unused-imports/no-unused-imports': isInEditor ? 'warn' : ERROR,
        'unused-imports/no-unused-vars': [
          ERROR,
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
        'use-isnan': [ERROR, { enforceForIndexOf: true, enforceForSwitchCase: true }],
        'valid-typeof': [ERROR, { requireStringLiterals: true }],
        'vars-on-top': ERROR,
        'yoda': [ERROR, 'never'],

        ...overrides,
      },
    },
  ];
}
