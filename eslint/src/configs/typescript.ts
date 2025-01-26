import type { OptionsComponentExts, OptionsFiles, OptionsOverrides, OptionsProjectType, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types';

import process from 'node:process';

import { ERROR, OFF } from '../flags';
import { GLOB_ASTRO_TS, GLOB_MARKDOWN, GLOB_TS, GLOB_TSX } from '../globs';
import { pluginAntfu } from '../plugins';
import { interopDefault, renameRules } from '../utils';

export async function typescript(
  options: OptionsComponentExts & OptionsFiles & OptionsOverrides & OptionsProjectType & OptionsTypeScriptParserOptions & OptionsTypeScriptWithTypes = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    componentExts = [],
    overrides = {},
    overridesTypeAware = {},
    parserOptions = {},
    type = 'app',
  } = options ?? {};

  const files = options.files ?? [
    GLOB_TS,
    GLOB_TSX,
    ...componentExts.map((ext) => `**/*.${ext}`),
  ];

  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX];

  const ignoresTypeAware = options.ignoresTypeAware ?? [
    `${GLOB_MARKDOWN}/**`,
    GLOB_ASTRO_TS,
  ];

  const tsconfigPath = options?.tsconfigPath
    ? options.tsconfigPath
    : undefined;
  const isTypeAware = !!tsconfigPath;

  const typeAwareRules: TypedFlatConfigItem['rules'] = {
    'dot-notation': OFF,
    'no-implied-eval': OFF,
    'ts/await-thenable': ERROR,
    'ts/dot-notation': [ERROR, { allowKeywords: true }],
    'ts/no-floating-promises': ERROR,
    'ts/no-for-in-array': ERROR,
    'ts/no-implied-eval': ERROR,
    // Temporary turning it off due to performance
    'ts/no-misused-promises': OFF,
    'ts/no-unnecessary-type-assertion': ERROR,
    'ts/no-unsafe-argument': ERROR,
    'ts/no-unsafe-assignment': ERROR,
    'ts/no-unsafe-call': ERROR,
    'ts/no-unsafe-member-access': ERROR,
    'ts/no-unsafe-return': ERROR,
    'ts/promise-function-async': ERROR,
    'ts/restrict-plus-operands': ERROR,
    'ts/restrict-template-expressions': ERROR,
    'ts/return-await': [ERROR, 'in-try-catch'],
    'ts/strict-boolean-expressions': [ERROR, { allowNullableBoolean: true, allowNullableObject: true }],
    'ts/switch-exhaustiveness-check': ERROR,
    'ts/unbound-method': ERROR,
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
  ): TypedFlatConfigItem {
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
                projectService: {
                  allowDefaultProject: ['./*.js'],
                  defaultProject: tsconfigPath,
                },
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions as any,
        },
      },
      name: `vinicunca/typescript/${typeAware ? 'type-aware-parser' : 'parser'}`,
    };
  }

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'vinicunca/typescript/setup',

      plugins: {
        antfu: pluginAntfu,
        ts: pluginTs as any,
      },
    },

    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...isTypeAware
      ? [
          makeParser({ files: filesTypeAware, ignores: ignoresTypeAware, typeAware: true }),
          makeParser({ files, ignores: filesTypeAware, typeAware: false }),
        ]
      : [
          makeParser({ files, typeAware: false }),
        ],

    {
      files,

      name: 'vinicunca/typescript/rules',

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

        'ts/ban-ts-comment': [ERROR, { 'ts-expect-error': 'allow-with-description' }],

        'ts/consistent-type-definitions': [ERROR, 'interface'],

        'ts/consistent-type-imports': [ERROR, {
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        }],

        'ts/explicit-member-accessibility': OFF,

        'ts/explicit-module-boundary-types': OFF,

        // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        'ts/method-signature-style': [ERROR, 'property'],

        'ts/naming-convention': OFF,

        'ts/no-dupe-class-members': ERROR,

        'ts/no-empty-function': OFF,

        'ts/no-empty-interface': OFF,

        'ts/no-empty-object-type': [ERROR, { allowInterfaces: 'always' }],

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

        ...(type === 'lib'
          ? {
              'ts/explicit-function-return-type': [ERROR, {
                allowExpressions: true,
                allowHigherOrderFunctions: true,
                allowIIFEs: true,
              }],
            }
          : {}
        ),

        ...overrides,
      },
    },

    ...isTypeAware
      ? [{
          files: filesTypeAware,
          ignores: ignoresTypeAware,
          name: 'vinicunca/typescript/rules-type-aware',
          rules: {
            ...typeAwareRules,
            ...overridesTypeAware,
          },
        }]
      : [],

    {
      files: ['**/*.d.?([cm])ts'],

      name: 'vinicunca/typescript/disables/dts',

      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'no-restricted-syntax': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },

    {
      files: ['**/*.{test,spec}.ts?(x)'],

      name: 'vinicunca/typescript/disables/tests',

      rules: {
        'no-unused-expressions': OFF,
      },
    },

    {
      files: ['**/*.js', '**/*.cjs'],

      name: 'vinicunca/typescript/disables/javascript',

      rules: {
        'ts/no-require-imports': OFF,
        'ts/no-var-requires': OFF,
      },
    },
  ];
}
