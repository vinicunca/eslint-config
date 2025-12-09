import type { TypedFlatConfigItem } from '../types';

import { isFunction } from '@vinicunca/perkakas';
import { GLOB_EXCLUDE } from '../globs';

export async function ignores(userIgnores: Array<string> | ((originals: Array<string>) => Array<string>) = []): Promise<Array<TypedFlatConfigItem>> {
  let ignores = [
    ...GLOB_EXCLUDE,
  ];

  if (isFunction(userIgnores)) {
    ignores = userIgnores(ignores);
  } else {
    ignores = [
      ...ignores,
      ...userIgnores,
    ];
  }

  return [
    {
      ignores,
      name: 'vinicunca/ignores',
    },
  ];
}
