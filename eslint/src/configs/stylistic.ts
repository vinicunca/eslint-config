import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';

import { ALWAYS, CONSISTENT, ERROR, NEVER, OFF } from '../flags';
import { pluginAntfu } from '../plugins';
import { interopDefault } from '../utils';

const STR_PARENS_NEW_LINE = 'parens-new-line';

export const STYLISTIC_CONFIG_DEFAULTS: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export async function stylistic(
  options: OptionsOverrides & StylisticConfig = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    indent,
    jsx,
    overrides = {},
    quotes,
    semi,
  } = {
    ...STYLISTIC_CONFIG_DEFAULTS,
    ...options,
  };

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  });

  return [
    {
      name: 'vinicunca/stylistic/rules',

      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },

      rules: {
        ...config.rules,

        'antfu/consistent-list-newline': 'error',
        'antfu/top-level-function': 'error',

        'curly': [ERROR, 'all'],

        'style/array-bracket-newline': [ERROR, CONSISTENT],

        'style/array-bracket-spacing': [ERROR, NEVER],

        'style/array-element-newline': [ERROR, CONSISTENT],

        'style/arrow-parens': [ERROR, ALWAYS],

        'style/brace-style': [ERROR],

        'style/func-call-spacing': [ERROR, NEVER],

        'style/jsx-child-element-spacing': OFF,

        'style/jsx-closing-bracket-location': [ERROR, 'line-aligned'],

        'style/jsx-closing-tag-location': ERROR,

        'style/jsx-curly-brace-presence': [ERROR, { children: NEVER, props: NEVER }],

        'style/jsx-curly-newline': [ERROR, {
          multiline: 'consistent',
          singleline: 'consistent',
        }],

        'style/jsx-curly-spacing': [ERROR, {
          children: true,
          spacing: {
            objectLiterals: NEVER,
          },
          when: 'always',
        }],

        'style/jsx-equals-spacing': [ERROR, NEVER],

        'style/jsx-first-prop-new-line': [ERROR, 'multiline-multiprop'],

        'style/jsx-indent': [ERROR, 2],

        'style/jsx-indent-props': [ERROR, 2],

        'style/jsx-max-props-per-line': [ERROR, { maximum: 1, when: 'multiline' }],

        'style/jsx-newline': ERROR,

        'style/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],

        'style/jsx-props-no-multi-spaces': ERROR,

        // Turned off to avoid conflicts with Perfectionist. https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props
        'style/jsx-sort-props': [OFF],

        'style/jsx-tag-spacing': [ERROR, {
          afterOpening: NEVER,
          beforeClosing: NEVER,
          beforeSelfClosing: 'always',
          closingSlash: NEVER,
        }],

        'style/jsx-wrap-multilines': [ERROR, {
          arrow: STR_PARENS_NEW_LINE,
          assignment: STR_PARENS_NEW_LINE,
          condition: STR_PARENS_NEW_LINE,
          declaration: STR_PARENS_NEW_LINE,
          logical: STR_PARENS_NEW_LINE,
          prop: STR_PARENS_NEW_LINE,
          return: STR_PARENS_NEW_LINE,
        }],

        'style/member-delimiter-style': [ERROR],

        'style/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

        'style/object-curly-spacing': [ERROR, ALWAYS],

        'style/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

        'style/operator-linebreak': [ERROR, 'before'],

        'style/padded-blocks': [ERROR, { blocks: NEVER, classes: NEVER, switches: NEVER }],

        'style/quote-props': [ERROR, 'consistent-as-needed'],

        'style/quotes': [ERROR, quotes],

        'style/rest-spread-spacing': [ERROR, NEVER],

        'style/semi': [ERROR, semi ? ALWAYS : NEVER],

        'style/semi-spacing': [ERROR, { after: true, before: false }],

        ...overrides,
      },
    },
  ];
}
