import type { OptionsComponentExts, OptionsFiles, OptionsOverrides, TypedFlatConfigItem } from '../types';

import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';

import { OFF } from '../flags';
import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_MARKDOWN_IN_MARKDOWN } from '../globs';
import { interopDefault, parserPlain } from '../utils';

export async function markdown(
  options: OptionsComponentExts & OptionsFiles & OptionsOverrides = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    componentExts = [],
    files = [GLOB_MARKDOWN],
    overrides = {},
  } = options;

  const markdown = await interopDefault(import('@eslint/markdown'));

  return [
    {
      name: 'vinicunca/markdown/setup',

      plugins: {
        markdown,
      },
    },

    {
      files,
      ignores: [GLOB_MARKDOWN_IN_MARKDOWN],
      name: 'vinicunca/markdown/processor',
      /**
       * `eslint-plugin-markdown` only creates virtual files for code blocks,
       * but not the markdown file itself. We use `eslint-merge-processors` to
       * add a pass-through processor for the markdown file itself.
       */
      processor: mergeProcessors([
        markdown.processors!.markdown,
        processorPassThrough,
      ]),
    },

    {
      files,
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca/markdown/parser',
    },

    {
      files: [
        GLOB_MARKDOWN_CODE,
        ...componentExts.map((ext) => `${GLOB_MARKDOWN}/**/*.${ext}`),
      ],

      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },

      name: 'vinicunca/markdown/disables',

      rules: {
        'import/newline-after-import': OFF,

        'no-alert': OFF,
        'no-console': OFF,
        'no-undef': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF,

        'node/prefer-global/process': OFF,

        'style/comma-dangle': OFF,

        'style/eol-last': OFF,

        'ts/consistent-type-imports': OFF,
        'ts/no-namespace': OFF,
        'ts/no-redeclare': OFF,
        'ts/no-require-imports': OFF,
        'ts/no-unused-vars': OFF,
        'ts/no-use-before-define': OFF,

        'unicode-bom': OFF,

        'unused-imports/no-unused-imports': OFF,
        'unused-imports/no-unused-vars': OFF,

        ...overrides,
      },
    },
  ];
}
