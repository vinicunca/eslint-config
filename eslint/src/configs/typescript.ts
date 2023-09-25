import process from 'node:process';
import type { FlatESLintConfigItem } from 'eslint-define-config';
import type { OptionsComponentExts, OptionsTypeScriptWithLanguageServer } from '../types';
import { parserTs, pluginImport, pluginTs, pluginVinicunca } from '../plugins';
import { renameRules } from '../utils';
import { ERROR, OFF } from '../flags';
import { GLOB_TS, GLOB_TSX } from '../globs';

export function typescript(options?: OptionsComponentExts): FlatESLintConfigItem[] {
  const {
    componentExts = [],
  } = options ?? {};

  return [
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
        },
      },

      plugins: {
        vinicunca: pluginVinicunca,
        import: pluginImport,
        ts: pluginTs as any,
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

        'ts/ban-ts-ignore': OFF,

        'ts/consistent-indexed-object-style': OFF,

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

export function typescriptWithLanguageServer(options: OptionsTypeScriptWithLanguageServer & OptionsComponentExts): FlatESLintConfigItem[] {
  const {
    componentExts = [],
    tsconfigPath,
    tsconfigRootDir = process.cwd(),
  } = options;

  return [
    {
      files: [
        GLOB_TS,
        GLOB_TSX,
        ...componentExts.map((ext) => `**/*.${ext}`),
      ],

      ignores: ['**/*.md/*.*'],

      languageOptions: {
        parser: parserTs,
        parserOptions: {
          project: [tsconfigPath],
          tsconfigRootDir,
        },
      },

      plugins: {
        ts: pluginTs as any,
      },

      rules: {
        'dot-notation': OFF,
        'ts/dot-notation': [ERROR, { allowKeywords: true }],

        'no-implied-eval': OFF,
        'ts/no-implied-eval': ERROR,

        'no-throw-literal': OFF,
        'ts/no-throw-literal': ERROR,

        'require-await': OFF,
        'ts/require-await': ERROR,

        'ts/await-thenable': ERROR,

        'ts/no-floating-promises': ERROR,
        'ts/no-for-in-array': ERROR,
        'ts/no-misused-promises': ERROR,

        'ts/no-unnecessary-type-assertion': ERROR,
        'ts/no-unsafe-argument': ERROR,
        'ts/no-unsafe-assignment': ERROR,
        'ts/no-unsafe-call': ERROR,
        'ts/no-unsafe-member-access': ERROR,
        'ts/no-unsafe-return': ERROR,

        'ts/restrict-plus-operands': ERROR,
        'ts/restrict-template-expressions': ERROR,
        'ts/unbound-method': ERROR,

      },
    },
  ];
}
