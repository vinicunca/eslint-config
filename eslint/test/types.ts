/**
 * This file is just to check if the types are compatible.
 */
import type { Linter } from 'eslint';

import type { TypedFlatConfigItem } from '../src';

// Make sure they are compatible
((): Linter.FlatConfig => ({} as TypedFlatConfigItem))();
((): TypedFlatConfigItem => ({} as Linter.FlatConfig))();
