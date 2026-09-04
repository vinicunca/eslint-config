import type { OptionsAntislop, OptionsHasTypeScript, TypedFlatConfigItem } from '../types';

import { ERROR } from '../flags';
import { GLOB_ALL_SRC, GLOB_GRAPHQL, GLOB_JSONC, GLOB_MARKDOWN_CODE, GLOB_SRC, GLOB_TOML } from '../globs';
import { ensurePackages, interopDefault } from '../utils';

export async function antislop(
  options: OptionsAntislop & OptionsHasTypeScript = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    cognitiveComplexity = 15,
    overrides = {},
    slop = true,
    sonarjs = true,
  } = options;

  await ensurePackages([
    ...slop ? ['eslint-plugin-slop'] : [],
    ...sonarjs ? ['eslint-plugin-sonarjs'] : [],
  ]);

  const [
    pluginSlop,
    pluginSonarjs,
  ] = await Promise.all([
    slop ? interopDefault(import('eslint-plugin-slop')) : undefined,
    sonarjs ? interopDefault(import('eslint-plugin-sonarjs')) : undefined,
  ]);

  return [
    {
      name: 'vinicunca/antislop/setup',
      plugins: {
        ...slop ? { slop: pluginSlop } : {},
        ...sonarjs ? { sonarjs: pluginSonarjs } : {},
      },
      ...typeof slop === 'object'
        ? { settings: { slop } }
        : {},
    },
    // `no-em-dash` supports any language, so it's applied across all
    // prose-bearing file types instead of being limited to JS/TS
    ...slop
      ? [{
          files: [...GLOB_ALL_SRC, GLOB_JSONC, GLOB_TOML, GLOB_GRAPHQL],
          /**
           * Markdown code fences are already scanned as part of the raw
           * Markdown text, so exclude the virtual embedded-code files to
           * avoid reporting the same em dash twice
           */
          ignores: [GLOB_MARKDOWN_CODE],
          name: 'vinicunca/antislop/rules/universal',
          rules: {
            'slop/no-em-dash': ERROR,
          },
        } as TypedFlatConfigItem]
      : [],
    {
      files: [GLOB_SRC],
      name: 'vinicunca/antislop/rules/javascript',
      rules: {
        ...slop
          ? {
              'slop/max-comment-length': ERROR,
              'slop/no-chained-type-assertions': ERROR,
              'slop/no-jargon': ERROR,
              'slop/no-trivial-functions': ERROR,
              'slop/no-trivial-type-aliases': ERROR,
              'slop/prefer-jsdoc': ERROR,
            } as const
          : {},

        // Curated subset of SonarJS focusing on redundant and duplicated code,
        // picked to complement the rest of the config without requiring type information
        ...sonarjs
          ? {
              ...cognitiveComplexity === false
                ? {}
                : { 'sonarjs/cognitive-complexity': [ERROR, cognitiveComplexity] as const },
              'sonarjs/no-all-duplicated-branches': ERROR,
              'sonarjs/no-collapsible-if': ERROR,
              'sonarjs/no-commented-code': ERROR,
              'sonarjs/no-dead-store': ERROR,
              'sonarjs/no-duplicated-branches': ERROR,
              'sonarjs/no-element-overwrite': ERROR,
              'sonarjs/no-empty-collection': ERROR,
              'sonarjs/no-gratuitous-expressions': ERROR,
              'sonarjs/no-identical-conditions': ERROR,
              'sonarjs/no-identical-expressions': ERROR,
              'sonarjs/no-identical-functions': ERROR,
              'sonarjs/no-invariant-returns': ERROR,
              'sonarjs/no-inverted-boolean-check': ERROR,
              'sonarjs/no-redundant-boolean': ERROR,
              'sonarjs/no-redundant-jump': ERROR,
              'sonarjs/no-unused-collection': ERROR,
              'sonarjs/no-use-of-empty-return-value': ERROR,
              'sonarjs/prefer-single-boolean-return': ERROR,
            } as const
          : {},

        ...overrides,
      },
    },
  ];
}
