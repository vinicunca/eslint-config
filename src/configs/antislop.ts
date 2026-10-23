import type { OptionsAntislop, OptionsHasTypeScript, TypedFlatConfigItem } from '../types';

import { ERROR } from '../flags';
import { GLOB_SRC } from '../globs';
import { interopDefault } from '../utils';

export async function antislop(
  options: OptionsAntislop & OptionsHasTypeScript = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    cognitiveComplexity = 15,
    overrides = {},
    slop = true,
    sonarjs = true,
  } = options;

  const [
    pluginSlop,
    pluginSonarjs,
  ] = await Promise.all([
    slop
      ? interopDefault(import('eslint-plugin-slop'))
      : undefined,
    sonarjs
      ? interopDefault(import('eslint-plugin-sonarjs'))
      : undefined,
  ]);

  return [
    {
      name: 'vinicunca/antislop/setup',
      plugins: {
        ...slop
          ? { slop: pluginSlop }
          : {},
        ...sonarjs
          ? { sonarjs: pluginSonarjs }
          : {},
      },
      ...typeof slop === 'object'
        ? {
            settings: { slop },
          }
        : {},
    },
    {
      files: [GLOB_SRC],
      name: 'vinicunca/antislop/rules/javascript',
      rules: {
        ...slop
          ? {
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
                : {
                    'sonarjs/cognitive-complexity': [ERROR, cognitiveComplexity] as const,
                  },
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
