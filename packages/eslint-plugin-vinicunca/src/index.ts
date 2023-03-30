import genericSpacing from './rules/generic-spacing';
import preferInlineTypeImport from './rules/prefer-inline-type-import';
import topLevelFunction from './rules/top-level-function';

export default {
  rules: {
    'generic-spacing': genericSpacing,
    'prefer-inline-type-import': preferInlineTypeImport,
    'top-level-function': topLevelFunction,
  },
};
