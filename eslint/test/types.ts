/**
 * This file is just to check if the types are compatible.
 */
import type { Linter } from 'eslint';

import type { FlatConfigItem } from '../src';

// Make sure they are compatible
((): Linter.FlatConfig => ({} as FlatConfigItem))();
((): FlatConfigItem => ({} as Linter.FlatConfig))();
