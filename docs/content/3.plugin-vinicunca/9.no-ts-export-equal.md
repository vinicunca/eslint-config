# no-ts-export-equal

Avoid using `exports =` in typescript files.

## Invalid

<!-- eslint-skip -->
```ts invalid
export = {};
```

## Valid

<!-- eslint-skip -->
```ts valid
export default {}
```
