import process from 'node:process';

import type { FlatConfigItem, OptionsComponentExts, OptionsFiles, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_SRC, GLOB_TS, GLOB_TSX } from '../globs';
import { pluginVinicunca } from '../plugins';
import { interopDefault, renameRules, toArray } from '../utils';

export async function typescript(
  options: OptionsFiles & OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions = {},
): Promise<Array<FlatConfigItem>> {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
  } = options ?? {};

  const files = options.files ?? [
    GLOB_SRC,
    ...componentExts.map((ext) => `**/*.${ext}`),
  ];

  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX];
  const tsconfigPath = options?.tsconfigPath
    ? toArray(options.tsconfigPath)
    : undefined;
  const isTypeAware = !!tsconfigPath;

  const typeAwareRules: FlatConfigItem['rules'] = {
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

  const [
    pluginTs,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  function makeParser(
    { files, ignores, typeAware }:
    { files: Array<string>; ignores?: Array<string>; typeAware: boolean },
  ): FlatConfigItem {
    return {
      files,
      ...ignores ? { ignores } : {},
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
          sourceType: 'module',
          ...typeAware
            ? {
                project: tsconfigPath,
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions as any,
        },
      },
      name: `vinicunca:typescript:${typeAware ? 'type-aware-parser' : 'parser'}`,
    };
  }

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'vinicunca:typescript:setup',

      plugins: {
        ts: pluginTs as any,
        vinicunca: pluginVinicunca,
      },
    },

    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...isTypeAware
      ? [
          makeParser({ files: filesTypeAware, typeAware: true }),
          makeParser({ files, ignores: filesTypeAware, typeAware: false }),
        ]
      : [makeParser({ files, typeAware: false })],

    {
      files,

      name: 'vinicunca:typescript:rules',

      rules: {
        ...renameRules(
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          { '@typescript-eslint': 'ts' },
        ),

        ...renameRules(
          pluginTs.configs.strict.rules!,
          { '@typescript-eslint': 'ts' },
        ),

        'no-dupe-class-members': OFF,
        'no-invalid-this': OFF,

        'no-loss-of-precision': OFF,
        'no-redeclare': OFF,

        'no-unused-vars': OFF,
        'no-use-before-define': OFF,

        'no-useless-constructor': OFF,

        'ts/array-type': [ERROR, { default: 'generic' }],

        'ts/ban-ts-comment': [ERROR, { 'ts-ignore': 'allow-with-description' }],

        'ts/ban-types': [ERROR, { types: { Function: false } }],

        'ts/consistent-type-definitions': [ERROR, 'interface'],

        'ts/consistent-type-imports': [ERROR, { disallowTypeAnnotations: false, prefer: 'type-imports' }],

        'ts/explicit-function-return-type': OFF,

        'ts/explicit-member-accessibility': OFF,

        'ts/explicit-module-boundary-types': OFF,

        // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        'ts/method-signature-style': ['error', 'property'],

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
          varsIgnorePattern: '^_',
        }],

        'ts/no-use-before-define': [ERROR, { classes: false, functions: false, variables: true }],

        'ts/parameter-properties': OFF,

        'ts/prefer-ts-expect-error': ERROR,

        'ts/triple-slash-reference': OFF,

        ...overrides,
      },
    },

    {
      files: filesTypeAware,
      name: 'vinicunca:typescript:rules-type-aware',
      rules: {
        ...tsconfigPath ? typeAwareRules : {},
        ...overrides,
      },
    },

    {
      files: ['**/*.d.ts'],

      name: 'vinicunca:typescript:dts-overrides',

      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'no-restricted-syntax': 'off',
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
