import type { ConfigItem, OptionsOverrides } from '../types';

import { ERROR, NEVER } from '../flags';
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs';
import { parserJsonc, pluginJsonc } from '../plugins';

export function jsonc(options: OptionsOverrides = {}): ConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:jsonc:setup',

      plugins: {
        jsonc: pluginJsonc as any,
      },
    },

    {
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],

      languageOptions: {
        parser: parserJsonc,
      },

      name: 'vinicunca:jsonc:rules',

      rules: {
        'jsonc/array-bracket-spacing': [ERROR, NEVER],

        'jsonc/comma-dangle': [ERROR, NEVER],

        'jsonc/comma-style': [ERROR, 'last'],

        'jsonc/indent': [ERROR, 2],

        'jsonc/key-spacing': [ERROR, { afterColon: true, beforeColon: false }],

        'jsonc/no-bigint-literals': ERROR,

        'jsonc/no-binary-expression': ERROR,

        'jsonc/no-binary-numeric-literals': ERROR,

        'jsonc/no-dupe-keys': ERROR,

        'jsonc/no-escape-sequence-in-identifier': ERROR,

        'jsonc/no-floating-decimal': ERROR,

        'jsonc/no-hexadecimal-numeric-literals': ERROR,

        'jsonc/no-infinity': ERROR,

        'jsonc/no-multi-str': ERROR,

        'jsonc/no-nan': ERROR,

        'jsonc/no-number-props': ERROR,

        'jsonc/no-numeric-separators': ERROR,

        'jsonc/no-octal': ERROR,

        'jsonc/no-octal-escape': ERROR,

        'jsonc/no-octal-numeric-literals': ERROR,

        'jsonc/no-parenthesized': ERROR,

        'jsonc/no-plus-sign': ERROR,

        'jsonc/no-regexp-literals': ERROR,

        'jsonc/no-sparse-arrays': ERROR,

        'jsonc/no-template-literals': ERROR,

        'jsonc/no-undefined-value': ERROR,

        'jsonc/no-unicode-codepoint-escapes': ERROR,

        'jsonc/no-useless-escape': ERROR,

        'jsonc/object-curly-newline': [ERROR, { consistent: true, multiline: true }],

        'jsonc/object-curly-spacing': [ERROR, 'always'],

        'jsonc/object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],

        'jsonc/quote-props': ERROR,

        'jsonc/quotes': ERROR,

        'jsonc/space-unary-ops': ERROR,

        'jsonc/valid-json-number': ERROR,

        'jsonc/vue-custom-block/no-parsing-error': ERROR,

        ...overrides,
      },
    },
  ];
}
