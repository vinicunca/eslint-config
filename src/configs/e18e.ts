import type { Linter } from 'eslint';
import type { OptionsE18e, OptionsIsInEditor, OptionsProjectType, TypedFlatConfigItem } from '../types';

import { OFF } from '../flags';
import { pluginE18e } from '../plugins';

export async function e18e(options: OptionsE18e & OptionsProjectType & OptionsIsInEditor = {}): Promise<Array<TypedFlatConfigItem>> {
  const {
    isInEditor = false,
    modernization = true,
    type = 'app',
    moduleReplacements = type === 'lib' && isInEditor,
    overrides = {},
    performanceImprovements = true,
  } = options;

  // TODO: better type needed on the e18e side
  const configs = pluginE18e.configs as Record<string, Linter.Config>;

  return [
    {
      name: 'vinicunca/e18e/rules',
      plugins: {
        e18e: pluginE18e,
      },
      rules: {
        ...modernization ? { ...configs.modernization.rules } : {},
        ...moduleReplacements ? { ...configs.moduleReplacements!.rules } : {},
        ...performanceImprovements ? { ...configs.performanceImprovements!.rules } : {},

        // e18e/prefer-static-regex is too strict for non-lib projects, and most of the time the performance improvement is negligible, so we'll disable it by default for app projects
        ...(type === 'lib'
          ? {}
          : {
              'e18e/prefer-static-regex': OFF,
            }),

        // these are a bit opinionated and dangerous (introducing behavioral changes), so we'll disable them by default for now
        'e18e/prefer-array-at': OFF,
        'e18e/prefer-array-from-map': OFF,
        'e18e/prefer-array-to-reversed': OFF,
        'e18e/prefer-array-to-sorted': OFF,
        'e18e/prefer-array-to-spliced': OFF,
        'e18e/prefer-spread-syntax': OFF,

        ...overrides,
      },
    },
  ];
}
