import { type FlatESLintConfigItem } from 'eslint-define-config';
import { type OptionsIgnores } from 'src';
import { GLOB_EXCLUDE } from '../globs';

export function ignores({ items = [], replace = false }: OptionsIgnores = {}): FlatESLintConfigItem[] {
  const ignoreList = replace ? items : [...GLOB_EXCLUDE, ...items];

  return [
    { ignores: ignoreList },
  ];
}
