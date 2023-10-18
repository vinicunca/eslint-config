# no-unused-collection

When a collection is populated but its contents are never used, then it is surely some kind of mistake. Either refactoring has rendered the collection moot, or an access is missing.

This rule raises an issue when no methods are called on a collection other than those that add or remove values.

## Invalid

<!-- eslint-skip -->
```js invalid
function getLength(a, b, c) {
  const strings = [];
  strings.push(a);
  strings.push(b);
  strings.push(c);

  return a.length + b.length + c.length;
}
```

## Valid

```js valid
function getLength(a, b, c) {
  return a.length + b.length + c.length;
}
```
