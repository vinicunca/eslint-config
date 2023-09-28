import process from 'node:process';
import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type OptionsComponentExts, type OptionsOverrides, type OptionsTypeScriptParserOptions, type OptionsTypeScriptWithTypes } from '../types';
import { parserTs, pluginImport, pluginTs, pluginVinicunca } from '../plugins';
import { renameRules } from '../utils';
import { ERROR, OFF } from '../flags';
import { GLOB_TS, GLOB_TSX } from '../globs';

export function typescript(
  options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions,
): FlatESLintConfigItem[] {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
    tsconfigPath,
  } = options ?? {};

  const typeAwareRules: FlatESLintConfigItem['rules'] = {
    'dot-notation': OFF,
    'no-implied-eval': OFF,
    'no-throw-literal': OFF,
    'ts/await-thenable': 'error',
    'ts/dot-notation': ['error', { allowKeywords: true }],
    'ts/no-floating-promises': 'error',
    'ts/no-for-in-array': 'error',
    'ts/no-implied-eval': 'error',
    'ts/no-misused-promises': 'error',
    'ts/no-throw-literal': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unsafe-argument': 'error',
    'ts/no-unsafe-assignment': 'error',
    'ts/no-unsafe-call': 'error',
    'ts/no-unsafe-member-access': 'error',
    'ts/no-unsafe-return': 'error',
    'ts/restrict-plus-operands': 'error',
    'ts/restrict-template-expressions': 'error',
    'ts/unbound-method': 'error',
  };

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      plugins: {
        vinicunca: pluginVinicunca,
        import: pluginImport,
        ts: pluginTs as any,
      },
    },

    {
      files: [
        GLOB_TS,
        GLOB_TSX,
        ...componentExts.map((ext) => `**/*.${ext}`),
      ],

      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module',
          ...tsconfigPath
            ? {
                project: [tsconfigPath],
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions as any,
        },
      },

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
        'ts/no-dupe-class-members': ERROR,

        'no-extra-parens': OFF,
        'ts/no-extra-parens': [ERROR, 'functions'],

        'no-invalid-this': OFF,
        'ts/no-invalid-this': ERROR,

        'no-loss-of-precision': OFF,
        'ts/no-loss-of-precision': ERROR,

        'no-redeclare': OFF,
        'ts/no-redeclare': ERROR,

        'no-use-before-define': OFF,
        'ts/no-use-before-define': [ERROR, { functions: false, classes: false, variables: true }],

        'no-useless-constructor': OFF,

        'ts/ban-ts-comment': [ERROR, { 'ts-ignore': 'allow-with-description' }],

        'ts/consistent-type-definitions': [ERROR, 'interface'],

        'ts/consistent-type-imports': [ERROR, { prefer: 'type-imports', disallowTypeAnnotations: false }],

        'ts/explicit-function-return-type': OFF,

        'ts/explicit-member-accessibility': OFF,

        'ts/explicit-module-boundary-types': OFF,

        'ts/naming-convention': OFF,

        'ts/no-empty-function': OFF,

        'ts/no-empty-interface': OFF,

        'ts/no-explicit-any': OFF,

        'ts/no-invalid-void-type': OFF,

        'ts/no-non-null-assertion': OFF,

        'ts/no-require-imports': ERROR,

        'no-unused-vars': OFF,
        'ts/no-unused-vars': [ERROR, {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        }],

        'ts/parameter-properties': OFF,

        'ts/prefer-ts-expect-error': ERROR,

        'ts/triple-slash-reference': OFF,

        'vinicunca/generic-spacing': ERROR,
        'vinicunca/named-tuple-spacing': ERROR,
        'vinicunca/no-cjs-exports': ERROR,
        'vinicunca/no-const-enum': ERROR,
        'vinicunca/no-ts-export-equal': ERROR,
        'vinicunca/prefer-inline-type-import': ERROR,

        ...tsconfigPath ? typeAwareRules : {},

        ...overrides,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': OFF,
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        'ts/no-require-imports': OFF,
        'ts/no-var-requires': OFF,
      },
    },
  ];
}
