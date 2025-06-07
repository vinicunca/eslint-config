import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';

import { ALWAYS, CONSISTENT, ERROR, NEVER } from '../flags';
import { pluginAntfu } from '../plugins';
import { interopDefault } from '../utils';

export const STYLISTIC_CONFIG_DEFAULTS: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
}

export async function stylistic(
  options: StylisticOptions = {},
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

        'antfu/consistent-chaining': ERROR,
        'antfu/consistent-list-newline': ERROR,
        'antfu/top-level-function': ERROR,

        'curly': [ERROR, 'all'],

        'style/array-bracket-newline': [ERROR, CONSISTENT],

        'style/array-bracket-spacing': [ERROR, NEVER],

        'style/array-element-newline': [ERROR, CONSISTENT],

        'style/arrow-parens': [ERROR, ALWAYS],

        'style/brace-style': [ERROR],

        'style/function-call-spacing': [ERROR, NEVER],

        'style/member-delimiter-style': [ERROR],

        'style/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

        'style/object-curly-spacing': [ERROR, ALWAYS],

        'style/object-property-newline': [ERROR, { allowAllPropertiesOnSameLine: true }],

        'style/operator-linebreak': [ERROR, 'before'],

        'style/padded-blocks': [ERROR, { blocks: NEVER, classes: NEVER, switches: NEVER }],

        'style/quote-props': [ERROR, 'consistent-as-needed'],

        'style/quotes': [ERROR, quotes],

        'style/rest-spread-spacing': [ERROR, NEVER],

        'style/semi': [ERROR, semi ? ALWAYS : NEVER],

        'style/semi-spacing': [ERROR, { after: true, before: false }],

        'style/generator-star-spacing': ['error', { after: true, before: false }],
        'style/padding-line-between-statements': [
          'error',
          { blankLine: 'always', next: '*', prev: 'import' },
          { blankLine: 'any', next: 'import', prev: 'import' },
        ],
        'style/yield-star-spacing': ['error', { after: true, before: false }],

        ...overrides,
      },
    },
  ];
}
