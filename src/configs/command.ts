import type { TypedFlatConfigItem } from '../types';

import createCommand from 'eslint-plugin-command/config';

export async function command(): Promise<Array<TypedFlatConfigItem>> {
  return [
    {
      ...createCommand(),
      name: 'vinicunca/command/rules',
    },
  ];
}
