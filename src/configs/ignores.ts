import type { TypedFlatConfigItem } from '../types';

import { GLOB_EXCLUDE } from '../globs';

export async function ignores(userIgnores: Array<string> = []): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      ignores: [
        ...GLOB_EXCLUDE,
        ...userIgnores,
      ],
      name: 'vinicunca/ignores',
    },
  ];
}
