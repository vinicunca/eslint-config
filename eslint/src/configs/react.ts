import type { ConfigItem, OptionsOverrides } from 'src';
import { ERROR, NEVER, OFF, WARN } from '../flags';
import { pluginReact, pluginReactHooks } from '../plugins';

export function react(
  options: OptionsOverrides = {},
): ConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:react:setup',

      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
    },

    {
      name: 'vinicunca:react:rules',

      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,

        'style/jsx-quotes': [ERROR, 'prefer-double'],

        'react/jsx-boolean-value': [ERROR, NEVER, { always: [] }],

        'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],

        'react/jsx-closing-tag-location': ERROR,

        'react/jsx-curly-spacing': [ERROR, {
          when: 'always',
          spacing: {
            objectLiterals: NEVER,
          },
          children: true,
        }],

        'react/jsx-indent-props': [ERROR, 2],

        'react/jsx-key': OFF,

        'react/jsx-max-props-per-line': [ERROR, { maximum: 1, when: 'multiline' }],

        'react/jsx-no-duplicate-props': [ERROR, { ignoreCase: true }],

        'react/jsx-no-literals': [OFF, { noStrings: true }],

        'react/jsx-pascal-case': [ERROR, {
          allowAllCaps: true,
          ignore: [],
        }],

        'react/jsx-sort-props': [OFF, {
          ignoreCase: true,
          callbacksLast: false,
          shorthandFirst: false,
          shorthandLast: false,
          noSortAlphabetically: false,
          reservedFirst: true,
        }],

        'react/jsx-sort-default-props': [OFF, {
          ignoreCase: true,
        }],

        'react/no-danger': WARN,

        'react/self-closing-comp': ERROR,

        'react/jsx-wrap-multilines': [ERROR, {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        }],

        'react/jsx-first-prop-new-line': [ERROR, 'multiline-multiprop'],

        'react/jsx-equals-spacing': [ERROR, NEVER],

        'react/jsx-indent': [ERROR, 2],

        'react/style-prop-object': ERROR,

        'react/jsx-tag-spacing': [ERROR, {
          closingSlash: NEVER,
          beforeSelfClosing: 'always',
          afterOpening: NEVER,
          beforeClosing: NEVER,
        }],

        'react/boolean-prop-naming': [OFF, {
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          message: '',
        }],

        'react/jsx-curly-brace-presence': [ERROR, { props: NEVER, children: NEVER }],

        'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],

        'react/destructuring-assignment': [ERROR, 'always'],

        'react/jsx-child-element-spacing': OFF,

        'react/jsx-max-depth': OFF,

        'react/jsx-props-no-multi-spaces': ERROR,

        'react/jsx-curly-newline': [ERROR, {
          multiline: 'consistent',
          singleline: 'consistent',
        }],

        'react/jsx-newline': ERROR,

        'react/react-in-jsx-scope': OFF,

        ...overrides,
      },
    },
  ];
}
