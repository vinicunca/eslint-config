import type { OptionsFormatters, StylisticConfig, TypedFlatConfigItem } from '../types';
import type { VendoredPrettierOptions } from '../vendor/prettier-types';

import { GLOB_CSS, GLOB_LESS, GLOB_MARKDOWN, GLOB_POSTCSS, GLOB_SCSS } from '../globs';
import { interopDefault, parserPlain } from '../utils';
import { STYLISTIC_CONFIG_DEFAULTS } from './stylistic';

export async function formatters(
  options: OptionsFormatters | true = {},
  stylistic: StylisticConfig = {},
): Promise<Array<TypedFlatConfigItem>> {
  if (options === true) {
    options = {
      css: true,
      graphql: true,
      html: true,
      markdown: true,
    };
  }

  const {
    indent,
    quotes,
    semi,
  } = {
    ...STYLISTIC_CONFIG_DEFAULTS,
    ...stylistic,
  };

  const prettierOptions: VendoredPrettierOptions = Object.assign(
    {
      endOfLine: 'auto',
      semi,
      singleQuote: quotes === 'single',
      tabWidth: typeof indent === 'number' ? indent : 2,
      trailingComma: 'all',
      useTabs: indent === 'tab',
    } satisfies VendoredPrettierOptions,
    options.prettierOptions || {},
  );

  const dprintOptions = Object.assign(
    {
      indentWidth: typeof indent === 'number' ? indent : 2,
      quoteStyle: quotes === 'single' ? 'preferSingle' : 'preferDouble',
      useTabs: indent === 'tab',
    },
    options.dprintOptions || {},
  );

  const pluginFormat = await interopDefault(import('eslint-plugin-format'));

  const configs: Array<TypedFlatConfigItem> = [
    {
      name: 'vinicunca:formatters:setup',
      plugins: {
        format: pluginFormat,
      },
    },
  ];

  if (options.css) {
    configs.push(
      {
        files: [GLOB_CSS, GLOB_POSTCSS],
        languageOptions: {
          parser: parserPlain,
        },
        name: 'vinicunca:formatters:css',
        rules: {
          'format/prettier': [
            'error',
            {
              ...prettierOptions,
              parser: 'css',
            },
          ],
        },
      },
      {
        files: [GLOB_SCSS],
        languageOptions: {
          parser: parserPlain,
        },
        name: 'vinicunca:formatters:scss',
        rules: {
          'format/prettier': [
            'error',
            {
              ...prettierOptions,
              parser: 'scss',
            },
          ],
        },
      },
      {
        files: [GLOB_LESS],
        languageOptions: {
          parser: parserPlain,
        },
        name: 'vinicunca:formatters:less',
        rules: {
          'format/prettier': [
            'error',
            {
              ...prettierOptions,
              parser: 'less',
            },
          ],
        },
      },
    );
  }

  if (options.html) {
    configs.push({
      files: ['**/*.html'],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca:formatters:html',
      rules: {
        'format/prettier': [
          'error',
          {
            ...prettierOptions,
            parser: 'html',
          },
        ],
      },
    });
  }

  if (options.markdown) {
    const formater = options.markdown === true
      ? 'prettier'
      : options.markdown;

    configs.push({
      files: [GLOB_MARKDOWN],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca:formatters:markdown',
      rules: {
        [`format/${formater}`]: [
          'error',
          formater === 'prettier'
            ? {
                printWidth: 120,
                ...prettierOptions,
                embeddedLanguageFormatting: 'off',
                parser: 'markdown',
              }
            : {
                ...dprintOptions,
                language: 'markdown',
              },
        ],
      },
    });
  }

  if (options.graphql) {
    configs.push({
      files: ['**/*.graphql'],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca:formatters:graphql',
      rules: {
        'format/prettier': [
          'error',
          {
            ...prettierOptions,
            parser: 'graphql',
          },
        ],
      },
    });
  }

  return configs;
}
