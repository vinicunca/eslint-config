import { isBoolean } from '@vinicunca/perkakas';

import type { FlatConfigItem, OptionsFiles, OptionsOverrides, OptionsStylistic } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_YAML } from '../globs';
import { interopDefault } from '../utils';

export async function yaml(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): Promise<FlatConfigItem[]> {
  const {
    files = [GLOB_YAML],
    overrides = {},
    stylistic = true,
  } = options;

  const {
    indent = 2,
    quotes = 'single',
  } = isBoolean(stylistic) ? {} : stylistic;

  const [
    pluginYaml,
    parserYaml,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser')),
  ] as const);

  return [
    {
      name: 'vinicunca:yaml:setup',

      plugins: {
        yaml: pluginYaml as any,
      },
    },

    {
      files,

      languageOptions: {
        parser: parserYaml,
      },

      name: 'vinicunca:yaml:rules',

      rules: {
        'style/spaced-comment': OFF,

        'yaml/block-mapping': ERROR,

        'yaml/block-sequence': ERROR,

        'yaml/no-empty-key': ERROR,

        'yaml/no-empty-sequence-entry': ERROR,

        'yaml/no-irregular-whitespace': ERROR,

        'yaml/plain-scalar': ERROR,

        'yaml/vue-custom-block/no-parsing-error': ERROR,

        ...stylistic
          ? {
              'yaml/block-mapping-question-indicator-newline': ERROR,

              'yaml/block-sequence-hyphen-indicator-newline': ERROR,

              'yaml/flow-mapping-curly-newline': ERROR,

              'yaml/flow-mapping-curly-spacing': ERROR,

              'yaml/flow-sequence-bracket-newline': ERROR,

              'yaml/flow-sequence-bracket-spacing': ERROR,

              'yaml/indent': [ERROR, indent === 'tab' ? 2 : indent],

              'yaml/key-spacing': ERROR,

              'yaml/no-tab-indent': ERROR,

              'yaml/quotes': [ERROR, { avoidEscape: false, prefer: quotes }],

              'yaml/spaced-comment': ERROR,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
