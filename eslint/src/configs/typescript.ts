import { isEmpty } from '@vinicunca/perkakas';
import process from 'node:process';

import type { ConfigItem, OptionsComponentExts, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_SRC } from '../globs';
import { parserTs, pluginImport, pluginTs, pluginVinicunca } from '../plugins';
import { renameRules } from '../utils';

export function typescript(
  options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions,
): ConfigItem[] {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
    tsconfigPath = [],
  } = options ?? {};

  const typeAwareRules: ConfigItem['rules'] = {
    'dot-notation': OFF,
    'no-implied-eval': OFF,
    'no-throw-literal': OFF,
    'ts/await-thenable': ERROR,
    'ts/dot-notation': [ERROR, { allowKeywords: true }],
    'ts/no-floating-promises': ERROR,
    'ts/no-for-in-array': ERROR,
    'ts/no-implied-eval': ERROR,
    // Temporary turning it off due to performance
    'ts/no-misused-promises': OFF,
    'ts/no-throw-literal': ERROR,
    'ts/restrict-plus-operands': ERROR,
    'ts/restrict-template-expressions': ERROR,
  };

  let tsConfigOptions = {};
  let additionalTypeAwareRules: ConfigItem['rules'] = {};

  if (!isEmpty(tsconfigPath)) {
    tsConfigOptions = {
      project: tsconfigPath,
      tsconfigRootDir: process.cwd(),
    };

    additionalTypeAwareRules = typeAwareRules;
  }

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'vinicunca:typescript:setup',

      plugins: {
        import: pluginImport,
        ts: pluginTs as any,
        vinicunca: pluginVinicunca,
      },
    },

    {
      files: [
        GLOB_SRC,
        ...componentExts.map((ext) => `**/*.${ext}`),
      ],

      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
          sourceType: 'module',
          ...tsConfigOptions,
          ...parserOptions as any,
        },
      },

      name: 'vinicunca:typescript:rules',

      rules: {
        ...renameRules(
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          '@typescript-eslint/',
          'ts/',
        ),

        ...renameRules(
          pluginTs.configs.strict.rules!,
          '@typescript-eslint/',
          'ts/',
        ),

        'no-dupe-class-members': OFF,
        'no-invalid-this': OFF,

        'no-loss-of-precision': OFF,
        'no-redeclare': OFF,

        'no-unused-vars': OFF,
        'no-use-before-define': OFF,

        'no-useless-constructor': OFF,
        'ts/ban-ts-comment': [ERROR, { 'ts-ignore': 'allow-with-description' }],

        'ts/ban-types': [ERROR, { types: { Function: false } }],
        'ts/consistent-type-definitions': [ERROR, 'interface'],

        'ts/consistent-type-imports': [ERROR, { disallowTypeAnnotations: false, prefer: 'type-imports' }],

        'ts/explicit-function-return-type': OFF,

        'ts/explicit-member-accessibility': OFF,

        'ts/explicit-module-boundary-types': OFF,

        'ts/naming-convention': OFF,

        'ts/no-dupe-class-members': ERROR,

        'ts/no-empty-function': OFF,

        'ts/no-empty-interface': OFF,

        'ts/no-explicit-any': OFF,

        'ts/no-import-type-side-effects': ERROR,

        'ts/no-invalid-this': ERROR,

        'ts/no-invalid-void-type': OFF,

        'ts/no-loss-of-precision': ERROR,

        'ts/no-non-null-assertion': OFF,

        'ts/no-redeclare': ERROR,

        'ts/no-require-imports': ERROR,

        'ts/no-unused-vars': [ERROR, {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        }],
        'ts/no-use-before-define': [ERROR, { classes: false, functions: false, variables: true }],

        'ts/parameter-properties': OFF,

        'ts/prefer-ts-expect-error': ERROR,

        'ts/triple-slash-reference': OFF,

        'vinicunca/generic-spacing': ERROR,
        'vinicunca/named-tuple-spacing': ERROR,
        'vinicunca/no-cjs-exports': ERROR,
        'vinicunca/no-ts-export-equal': ERROR,

        ...additionalTypeAwareRules,

        ...overrides,
      },
    },

    {
      files: ['**/*.d.ts'],

      name: 'vinicunca:typescript:dts-overrides',

      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },

    {
      files: ['**/*.{test,spec}.ts?(x)'],

      name: 'vinicunca:typescript:tests-overrides',

      rules: {
        'no-unused-expressions': OFF,
      },
    },

    {
      files: ['**/*.js', '**/*.cjs'],

      name: 'vinicunca:typescript:javascript-overrides',

      rules: {
        'ts/no-require-imports': OFF,
        'ts/no-var-requires': OFF,
      },
    },
  ];
}
