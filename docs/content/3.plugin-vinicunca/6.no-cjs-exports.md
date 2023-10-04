# no-cjs-exports

Avoid using CJS exports in typescript files.

## Invalid

<!-- eslint-skip -->
```ts invalid
exports.a = {};

module.exports.a = {};
```
