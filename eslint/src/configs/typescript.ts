import process from 'node:process';
import type { ConfigItem, OptionsComponentExts, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '../types';
import { parserTs, pluginImport, pluginTs, pluginVinicunca } from '../plugins';
import { renameRules } from '../utils';
import { ERROR, OFF } from '../flags';
import { GLOB_SRC } from '../globs';

export function typescript(
  options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions,
): ConfigItem[] {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
    tsconfigPath,
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
    'ts/no-misused-promises': ERROR,
    'ts/no-throw-literal': ERROR,
    'ts/no-unnecessary-type-assertion': ERROR,
    'ts/no-unsafe-argument': ERROR,
    'ts/no-unsafe-assignment': ERROR,
    'ts/no-unsafe-call': ERROR,
    'ts/no-unsafe-member-access': ERROR,
    'ts/no-unsafe-return': ERROR,
    'ts/restrict-plus-operands': ERROR,
    'ts/restrict-template-expressions': ERROR,
    'ts/unbound-method': ERROR,
  };

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'vinicunca:typescript:setup',

      plugins: {
        vinicunca: pluginVinicunca,
        import: pluginImport,
        ts: pluginTs as any,
      },
    },

    {
      name: 'vinicunca:typescript:rules',

      files: [
        GLOB_SRC,
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

        'ts/ban-types': [ERROR, { types: { Function: false } }],

        'ts/consistent-type-definitions': [ERROR, 'interface'],

        'ts/consistent-type-imports': [ERROR, { prefer: 'type-imports', disallowTypeAnnotations: false }],

        'ts/explicit-function-return-type': OFF,

        'ts/explicit-member-accessibility': OFF,

        'ts/explicit-module-boundary-types': OFF,

        'ts/naming-convention': OFF,

        'ts/no-empty-function': OFF,

        'ts/no-empty-interface': OFF,

        'ts/no-explicit-any': OFF,

        'ts/no-import-type-side-effects': ERROR,

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
        'vinicunca/no-ts-export-equal': ERROR,

        ...tsconfigPath ? typeAwareRules : {},

        ...overrides,
      },
    },

    {
      name: 'vinicunca:typescript:dts-overrides',

      files: ['**/*.d.ts'],

      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'import/no-duplicates': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },

    {
      name: 'vinicunca:typescript:tests-overrides',

      files: ['**/*.{test,spec}.ts?(x)'],

      rules: {
        'no-unused-expressions': OFF,
      },
    },

    {
      name: 'vinicunca:typescript:javascript-overrides',

      files: ['**/*.js', '**/*.cjs'],

      rules: {
        'ts/no-require-imports': OFF,
        'ts/no-var-requires': OFF,
      },
    },
  ];
}
