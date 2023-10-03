import { GLOB_YAML } from '../globs';
import { parserYaml, pluginYaml } from '../plugins';
import { ERROR, OFF } from '../flags';
import { type FlatESLintConfigItem, type OptionsOverrides } from '../types';

export function yaml(
  options: OptionsOverrides = {},
): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options;

  return [
    {
      name: 'vinicunca:yaml:setup',

      plugins: {
        yaml: pluginYaml as any,
      },
    },

    {
      name: 'vinicunca:yaml:rules',

      files: [GLOB_YAML],

      languageOptions: {
        parser: parserYaml,
      },

      rules: {
        'style/spaced-comment': OFF,

        'yaml/block-mapping': ERROR,
        'yaml/block-mapping-question-indicator-newline': ERROR,
        'yaml/block-sequence': ERROR,
        'yaml/block-sequence-hyphen-indicator-newline': ERROR,
        'yaml/flow-mapping-curly-newline': ERROR,
        'yaml/flow-mapping-curly-spacing': ERROR,
        'yaml/flow-sequence-bracket-newline': ERROR,
        'yaml/flow-sequence-bracket-spacing': ERROR,
        'yaml/indent': [ERROR, 2],
        'yaml/key-spacing': ERROR,
        'yaml/no-empty-key': ERROR,
        'yaml/no-empty-sequence-entry': ERROR,
        'yaml/no-irregular-whitespace': ERROR,
        'yaml/no-tab-indent': ERROR,
        'yaml/plain-scalar': ERROR,

        'yaml/quotes': [ERROR, { avoidEscape: false, prefer: 'single' }],
        'yaml/spaced-comment': ERROR,

        'yaml/vue-custom-block/no-parsing-error': ERROR,

        ...overrides,
      },
    },
  ];
}
