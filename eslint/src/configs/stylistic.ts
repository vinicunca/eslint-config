import type { FlatConfigItem, OptionsOverrides, StylisticConfig } from '../types';

import { ALWAYS, CONSISTENT, ERROR, NEVER, OFF } from '../flags';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import { pluginVinicunca } from '../plugins';
import { interopDefault } from '../utils';

export const STYLISTIC_CONFIG_DEFAULTS: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export async function stylistic(
  options: StylisticConfig & OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
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
      name: 'vinicunca:stylistic',

      plugins: {
        style: pluginStylistic,
        vinicunca: pluginVinicunca,
      },

      rules: {
        ...config.rules,

        'curly': [ERROR, 'all'],

        'style/array-bracket-newline': [ERROR, CONSISTENT],

        'style/array-bracket-spacing': [ERROR, NEVER],

        'style/array-element-newline': [ERROR, CONSISTENT],

        'style/arrow-parens': [ERROR, ALWAYS],

        'style/brace-style': [ERROR],

        'style/func-call-spacing': [ERROR, NEVER],

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

        'vinicunca/consistent-list-newline': ERROR,

        'vinicunca/if-newline': ERROR,

        'vinicunca/top-level-function': ERROR,

        ...overrides,
      },
    },

    {
      files: [GLOB_JSX, GLOB_TSX],

      rules: {
        'vinicunca/consistent-list-newline': OFF,
      },
    },
  ];
}
