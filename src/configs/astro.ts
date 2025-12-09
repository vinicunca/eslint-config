import type { OptionsFiles, OptionsOverrides, OptionsStylistic, TypedFlatConfigItem } from '../types';

import { ERROR, OFF } from '../flags';
import { GLOB_ASTRO } from '../globs';
import { interopDefault } from '../utils';

export async function astro(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_ASTRO],
    overrides = {},
    stylistic = true,
  } = options;

  const [
    pluginAstro,
    parserAstro,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-astro')),
    interopDefault(import('astro-eslint-parser')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  return [
    {
      name: 'vinicunca/astro/setup',
      plugins: {
        astro: pluginAstro,
      },
    },
    {
      files,

      languageOptions: {
        globals: pluginAstro.environments.astro.globals,
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: parserTs,
        },
        sourceType: 'module',
      },

      name: 'vinicunca/astro/rules',

      processor: 'astro/client-side-ts',

      rules: {
        // Astro uses top level await for e.g. data fetching
        // https://docs.astro.build/en/guides/data-fetching/#fetch-in-astro
        'antfu/no-top-level-await': OFF,

        // use recommended rules
        'astro/missing-client-only-directive-value': ERROR,
        'astro/no-conflict-set-directives': ERROR,
        'astro/no-deprecated-astro-canonicalurl': ERROR,
        'astro/no-deprecated-astro-fetchcontent': ERROR,
        'astro/no-deprecated-astro-resolve': ERROR,
        'astro/no-deprecated-getentrybyslug': ERROR,
        'astro/no-set-html-directive': OFF,
        'astro/no-unused-define-vars-in-style': ERROR,
        'astro/semi': OFF,
        'astro/valid-compile': ERROR,

        ...stylistic
          ? {
              'style/indent': OFF,
              'style/jsx-closing-tag-location': OFF,
              'style/jsx-one-expression-per-line': OFF,
              'style/no-multiple-empty-lines': OFF,
            }
          : {},

        ...overrides,
      },
    },
  ];
}
