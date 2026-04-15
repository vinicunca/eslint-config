import type { TypedFlatConfigItem } from '../types';

import { isFunction } from '@vinicunca/perkakas';
import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from '../globs';

export async function ignores(
  userIgnores: Array<string> | ((originals: Array<string>) => Array<string>) = [],
  ignoreTypeScript = false,
): Promise<Array<TypedFlatConfigItem>> {
  let ignores = [
    ...GLOB_EXCLUDE,
  ];

  if (ignoreTypeScript) {
    ignores.push(GLOB_TS, GLOB_TSX);
  }

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
