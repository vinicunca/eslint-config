import fs from 'node:fs';
// @ts-expect-error missing types
import parseGitignore from 'parse-gitignore';

import type { FlatConfigItem, OptionsIgnores } from '../types';

import { GLOB_EXCLUDE } from '../globs';

export async function ignores(
  {
    enableGitignore = true,
    items = [],
    replace = false,
  }: OptionsIgnores = {},
): Promise<FlatConfigItem[]> {
  const ignoreList: string[] = [];

  if (enableGitignore && fs.existsSync('.gitignore')) {
    const gitignoreContent = fs.readFileSync('.gitignore', 'utf8');
    const parsed = parseGitignore(gitignoreContent);
    const globs = parsed.globs();

    for (const glob of globs) {
      if (glob.type === 'ignore') {
        ignoreList.push(...glob.patterns);
      } else if (glob.type === 'unignore') {
        ignoreList.push(...glob.patterns.map((pattern: string) => `!${pattern}`));
      };
    }
  }

  if (replace) {
    ignoreList.push(...items);
  } else {
    ignoreList.push(...GLOB_EXCLUDE, ...items);
  }

  return [
    {
      ignores: Array.from(new Set(ignoreList)),
    },
  ];
}
