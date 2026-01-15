import type { OptionsFiles, OptionsOverrides, OptionsStylistic, TypedFlatConfigItem } from '../types';

import { isBoolean, isNumber } from '@vinicunca/perkakas';

import { ERROR, OFF } from '../flags';
import { GLOB_TOML } from '../globs';
import { interopDefault } from '../utils';

export async function toml(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_TOML],
    overrides = {},
    stylistic = true,
  } = options;

  const {
    indent = 2,
  } = isBoolean(stylistic) ? {} : stylistic;

  const [
    pluginToml,
    parserToml,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-toml')),
    interopDefault(import('toml-eslint-parser')),
  ] as const);

  return [
    {
      name: 'vinicunca/toml/setup',

      plugins: {
        toml: pluginToml,
      },
    },
    {
      files,

      languageOptions: {
        parser: parserToml,
      },

      name: 'vinicunca/toml/rules',

      rules: {
        'style/spaced-comment': OFF,

        'toml/comma-style': ERROR,
        'toml/keys-order': ERROR,
        'toml/no-space-dots': ERROR,
        'toml/no-unreadable-number-separator': ERROR,
        'toml/precision-of-fractional-seconds': ERROR,
        'toml/precision-of-integer': ERROR,
        'toml/tables-order': ERROR,

        'toml/vue-custom-block/no-parsing-error': ERROR,

        ...stylistic
          ? {
              'toml/array-bracket-newline': ERROR,
              'toml/array-bracket-spacing': ERROR,
              'toml/array-element-newline': ERROR,
              // eslint-disable-next-line no-nested-ternary, sonar/no-nested-conditional
              'toml/indent': [ERROR, isNumber(indent) ? indent : indent === 'tab' ? 'tab' : 2],
              'toml/inline-table-curly-spacing': ERROR,
              'toml/key-spacing': ERROR,
              'toml/padding-line-between-pairs': ERROR,
              'toml/padding-line-between-tables': ERROR,
              'toml/quoted-keys': ERROR,
              'toml/spaced-comment': ERROR,
              'toml/table-bracket-spacing': ERROR,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
