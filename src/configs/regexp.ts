import type { OptionsOverrides, OptionsRegExp, TypedFlatConfigItem } from '../types';

import { configs } from 'eslint-plugin-regexp';

import { ERROR, WARN } from '../flags';

export async function regexp(
  options: OptionsRegExp & OptionsOverrides = {},
): Promise<Array<TypedFlatConfigItem>> {
  const config = configs['flat/recommended'] as TypedFlatConfigItem;

  const rules = {
    ...config.rules,
  };

  if (options.level === WARN) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in rules) {
      if (rules[key] === ERROR) {
        rules[key] = WARN;
      }
    }
  }

  return [
    {
      ...config,
      name: 'vinicunca/regexp/rules',
      rules: {
        ...rules,
        ...options.overrides,
      },
    },
  ];
}
