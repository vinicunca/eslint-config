# prefer-single-boolean-return

Return of boolean literal statements wrapped into `if-then-else` flow should be simplified.

## Invalid

<!-- eslint-skip -->
```js invalid
if (expression) {
  return true;
} else {
  return false;
}
```

## Valid

```js valid
return expression;
```
