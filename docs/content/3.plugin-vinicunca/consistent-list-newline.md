# consistent-list-newline

Enforce consistent line breaks inside braces of object/array/named imports/exports and function parameters.

It will check the newline style of the **first** property or item and apply to the rest of the properties or items. So you can also use this rule to quite wrap / unwrap your code.

## Invalid

<!-- eslint-skip -->
```js invalid
const foo = {
  bar: 'baz', qux: 'quux',
  fez: 'fum',
};
```

## Valid

<!-- eslint-skip -->
```js valid
const foo = {
  bar: 'baz',
  qux: 'quux',
  fez: 'fum',
};

const foo = { bar: 'baz', qux: 'quux', fez: 'fum' };
```

## Rule Conflicts

This rule might conflicts with the [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline). You can turn if off.

```ts
export default {
  rules: {
    'object-curly-newline': 'off',
  }
};
```
