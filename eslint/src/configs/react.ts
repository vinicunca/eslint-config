import type { OptionsFiles, OptionsOverrides, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types';

import { ERROR, NEVER, OFF, WARN } from '../flags';
import { GLOB_SRC } from '../globs';
import { interopDefault } from '../utils';

export async function react(
  options: OptionsFiles & OptionsOverrides & OptionsTypeScriptWithTypes = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_SRC],
    overrides = {},
  } = options;

  const [
    pluginReact,
    pluginReactHooks,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
    // @ts-expect-error missing types
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  const plugins = pluginReact.configs.all.plugins;

  return [
    {
      name: 'vinicunca/react/setup',

      plugins: {
        'react': plugins['@eslint-react'],
        'react-dom': plugins['@eslint-react/dom'],
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
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },

      name: 'vinicunca/react/rules',

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
