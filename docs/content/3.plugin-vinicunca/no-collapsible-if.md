# no-collapsible-if

Merging collapsible if statements increases the code's readability.

## Invalid

<!-- eslint-skip -->
```js invalid
if (x !== undefined) {
  if (y === 2) {
    // ...
  }
}
```

## Valid

```js valid
if (x !== undefined && y === 2) {
  // ...
}
```
