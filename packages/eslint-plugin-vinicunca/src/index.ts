// import ifNewline from './rules/if-newline'
// import importDedupe from './rules/import-dedupe'
import genericSpacing from './rules/generic-spacing';
import preferInlineTypeImport from './rules/prefer-inline-type-import';

export default {
  rules: {
    // 'if-newline': ifNewline,
    // 'import-dedupe': importDedupe,
    'generic-spacing': genericSpacing,
    'prefer-inline-type-import': preferInlineTypeImport,
  },
};
