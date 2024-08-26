/* eslint-disable sonar/no-duplicate-string */
import { isNumber } from '@vinicunca/perkakas';
import { isPackageExists } from 'local-pkg';

import type { OptionsFormatters, StylisticConfig, TypedFlatConfigItem } from '../types';
import type { VendoredPrettierOptions } from '../vendor/prettier-types';

import { ERROR, OFF } from '../flags';
import { GLOB_ASTRO, GLOB_ASTRO_TS, GLOB_CSS, GLOB_GRAPHQL, GLOB_LESS, GLOB_MARKDOWN, GLOB_POSTCSS, GLOB_SCSS, GLOB_SVG, GLOB_XML } from '../globs';
import { ensurePackages, interopDefault, isPackageInScope, parserPlain } from '../utils';
import { STYLISTIC_CONFIG_DEFAULTS } from './stylistic';

export async function formatters(
  options: OptionsFormatters | true = {},
  stylistic: StylisticConfig = {},
): Promise<Array<TypedFlatConfigItem>> {
  if (options === true) {
    const isPrettierPluginXmlInScope = isPackageInScope('@prettier/plugin-xml');

    options = {
      astro: isPackageInScope('prettier-plugin-astro'),
      css: true,
      graphql: true,
      html: true,
      markdown: true,
      slidev: isPackageExists('@slidev/cli'),
      svg: isPrettierPluginXmlInScope,
      xml: isPrettierPluginXmlInScope,
    };
  }

  await ensurePackages([
    'eslint-plugin-format',
    options.markdown && options.slidev ? 'prettier-plugin-slidev' : undefined,
    options.astro ? 'prettier-plugin-astro' : undefined,
    (options.xml || options.svg) ? '@prettier/plugin-xml' : undefined,
  ]);

  if (options.slidev && options.markdown !== true && options.markdown !== 'prettier') {
    throw new Error('`slidev` option only works when `markdown` is enabled with `prettier`');
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
      tabWidth: isNumber(indent) ? indent : 2,
      trailingComma: 'all',
      useTabs: indent === 'tab',
    } satisfies VendoredPrettierOptions,
    options.prettierOptions || {},
  );

  const prettierXmlOptions = {
    xmlQuoteAttributes: 'double',
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
    xmlWhitespaceSensitivity: 'ignore',
  };

  const dprintOptions = Object.assign(
    {
      indentWidth: isNumber(indent) ? indent : 2,
      quoteStyle: quotes === 'single' ? 'preferSingle' : 'preferDouble',
      useTabs: indent === 'tab',
    },
    options.dprintOptions || {},
  );

  const pluginFormat = await interopDefault(import('eslint-plugin-format'));

  const configs: Array<TypedFlatConfigItem> = [
    {
      name: 'vinicunca/formatter/setup',
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
        name: 'vinicunca/formatter/css',
        rules: {
          'format/prettier': [
            ERROR,
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
        name: 'vinicunca/formatter/scss',
        rules: {
          'format/prettier': [
            ERROR,
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
        name: 'vinicunca/formatter/less',
        rules: {
          'format/prettier': [
            ERROR,
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
      name: 'vinicunca/formatter/html',
      rules: {
        'format/prettier': [
          ERROR,
          {
            ...prettierOptions,
            parser: 'html',
          },
        ],
      },
    });
  }

  if (options.xml) {
    configs.push({
      files: [GLOB_XML],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'antfu/formatter/xml',
      rules: {
        'format/prettier': [
          ERROR,
          {
            ...prettierXmlOptions,
            ...prettierOptions,
            parser: 'xml',
            plugins: [
              '@prettier/plugin-xml',
            ],
          },
        ],
      },
    });
  }

  if (options.svg) {
    configs.push({
      files: [GLOB_SVG],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'antfu/formatter/svg',
      rules: {
        'format/prettier': [
          ERROR,
          {
            ...prettierXmlOptions,
            ...prettierOptions,
            parser: 'xml',
            plugins: [
              '@prettier/plugin-xml',
            ],
          },
        ],
      },
    });
  }

  if (options.markdown) {
    const formater = options.markdown === true
      ? 'prettier'
      : options.markdown;

    let GLOB_SLIDEV;

    if (options.slidev) {
      GLOB_SLIDEV = options.slidev === true
        ? ['**/slides.md']
        : options.slidev.files;
    } else {
      GLOB_SLIDEV = [];
    }

    configs.push({
      files: [GLOB_MARKDOWN],
      ignores: GLOB_SLIDEV,
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca/formatter/markdown',
      rules: {
        [`format/${formater}`]: [
          ERROR,
          formater === 'prettier'
            ? {
                printWidth: 120,
                ...prettierOptions,
                embeddedLanguageFormatting: OFF,
                parser: 'markdown',
              }
            : {
                ...dprintOptions,
                language: 'markdown',
              },
        ],
      },
    });

    if (options.slidev) {
      configs.push({
        files: GLOB_SLIDEV,
        languageOptions: {
          parser: parserPlain,
        },
        name: 'vinicunca/formatter/slidev',
        rules: {
          'format/prettier': [
            ERROR,
            {
              ...prettierOptions,
              embeddedLanguageFormatting: 'off',
              parser: 'slidev',
              plugins: [
                'prettier-plugin-slidev',
              ],
            },
          ],
        },
      });
    }
  }

  if (options.astro) {
    configs.push({
      files: [GLOB_ASTRO],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca/formatter/astro',
      rules: {
        'format/prettier': [
          ERROR,
          {
            ...prettierOptions,
            parser: 'astro',
            plugins: [
              'prettier-plugin-astro',
            ],
          },
        ],
      },
    });

    configs.push({
      files: [GLOB_ASTRO, GLOB_ASTRO_TS],
      name: 'vinicunca/formatter/astro/disables',
      rules: {
        'style/arrow-parens': OFF,
        'style/block-spacing': OFF,
        'style/comma-dangle': OFF,
        'style/indent': OFF,
        'style/no-multi-spaces': OFF,
        'style/quotes': OFF,
        'style/semi': OFF,
      },
    });
  }

  if (options.graphql) {
    configs.push({
      files: [GLOB_GRAPHQL],
      languageOptions: {
        parser: parserPlain,
      },
      name: 'vinicunca/formatter/graphql',
      rules: {
        'format/prettier': [
          ERROR,
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
