import type { FlatConfigItem, OptionsFiles, OptionsHasTypeScript, OptionsOverrides } from '../types';

import { ERROR, NEVER, OFF, WARN } from '../flags';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import { interopDefault } from '../utils';

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

        'react/jsx-key': OFF,

        'react/jsx-max-depth': OFF,

        'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: true }],

        'react/jsx-no-literals': [OFF, { noStrings: true }],

        'react/jsx-pascal-case': [ERROR, {
          allowAllCaps: true,
          ignore: [],
        }],

        'react/jsx-sort-default-props': [OFF, {
          ignoreCase: true,
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
