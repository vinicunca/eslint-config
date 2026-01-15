import type { TypedFlatConfigItem } from '../types'

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { OFF } from '../flags'

export async function disables(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [`**/scripts/${GLOB_SRC}`],
      name: 'vinicunca/disables/scripts',
      rules: {
        'antfu/no-top-level-await': OFF,
        'no-console': OFF,
        'ts/explicit-function-return-type': OFF,
      },
    },
    {
      files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
      name: 'vinicunca/disables/cli',
      rules: {
        'antfu/no-top-level-await': OFF,
        'no-console': OFF,
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'vinicunca/disables/bin',
      rules: {
        'antfu/no-import-dist': OFF,
        'antfu/no-import-node-modules-by-path': OFF,
      },
    },
    {
      files: ['**/*.d.?([cm])ts'],
      name: 'vinicunca/disables/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': OFF,
        'no-restricted-syntax': OFF,
        'unused-imports/no-unused-vars': OFF,
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      name: 'vinicunca/disables/cjs',
      rules: {
        'ts/no-require-imports': OFF,
      },
    },
    {
      files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
      name: 'vinicunca/disables/config-files',
      rules: {
        'antfu/no-top-level-await': OFF,
        'no-console': OFF,
        'ts/explicit-function-return-type': OFF,
      },
    },
  ]
}
