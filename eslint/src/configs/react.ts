import type { FlatConfigItem, OptionsFiles, OptionsHasTypeScript, OptionsOverrides } from '../types';

import { ERROR, NEVER, OFF, WARN } from '../flags';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import { interopDefault } from '../utils';

const STR_PARENS_NEW_LINE = 'parens-new-line';

export async function react(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsFiles = {},
): Promise<FlatConfigItem[]> {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides = {},
  } = options;

  const [
    pluginReact,
    pluginReactHooks,
  ] = await Promise.all([
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-react')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-react-hooks')),
  ] as const);

  return [
    {
      name: 'vinicunca:react:setup',

      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },

      settings: {
        react: {
          version: 'detect',
        },
      },
    },

    {
      files,

      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },

      name: 'vinicunca:react:rules',

      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,

        'react/boolean-prop-naming': [OFF, {
          message: '',
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        }],

        'react/destructuring-assignment': [ERROR, 'always'],

        'react/jsx-boolean-value': [ERROR, NEVER, { always: [] }],

        'react/jsx-child-element-spacing': OFF,

        'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],

        'react/jsx-closing-tag-location': ERROR,

        'react/jsx-curly-brace-presence': [ERROR, { children: NEVER, props: NEVER }],

        'react/jsx-curly-newline': [ERROR, {
          multiline: 'consistent',
          singleline: 'consistent',
        }],

        'react/jsx-curly-spacing': [ERROR, {
          children: true,
          spacing: {
            objectLiterals: NEVER,
          },
          when: 'always',
        }],

        'react/jsx-equals-spacing': [ERROR, NEVER],

        'react/jsx-first-prop-new-line': [ERROR, 'multiline-multiprop'],

        'react/jsx-indent': [ERROR, 2],

        'react/jsx-indent-props': [ERROR, 2],

        'react/jsx-key': OFF,

        'react/jsx-max-depth': OFF,

        'react/jsx-max-props-per-line': [ERROR, { maximum: 1, when: 'multiline' }],

        'react/jsx-newline': ERROR,

        'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: true }],

        'react/jsx-no-literals': [OFF, { noStrings: true }],

        'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],

        'react/jsx-pascal-case': [ERROR, {
          allowAllCaps: true,
          ignore: [],
        }],

        'react/jsx-props-no-multi-spaces': ERROR,

        'react/jsx-sort-default-props': [OFF, {
          ignoreCase: true,
        }],

        // Turned off to avoid conflicts with Perfectionist. https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props
        'react/jsx-sort-props': [OFF],

        'react/jsx-tag-spacing': [ERROR, {
          afterOpening: NEVER,
          beforeClosing: NEVER,
          beforeSelfClosing: 'always',
          closingSlash: NEVER,
        }],

        'react/jsx-wrap-multilines': [ERROR, {
          arrow: STR_PARENS_NEW_LINE,
          assignment: STR_PARENS_NEW_LINE,
          condition: STR_PARENS_NEW_LINE,
          declaration: STR_PARENS_NEW_LINE,
          logical: STR_PARENS_NEW_LINE,
          prop: STR_PARENS_NEW_LINE,
          return: STR_PARENS_NEW_LINE,
        }],

        'react/no-danger': WARN,

        'react/no-unescaped-entities': OFF,

        'react/prop-types': OFF,

        'react/react-in-jsx-scope': OFF,

        'react/self-closing-comp': ERROR,

        'react/style-prop-object': ERROR,

        ...overrides,
      },
    },
  ];
}
