# no-redundant-boolean

Redundant Boolean literals should be removed from expressions to improve readability.

## Invalid

<!-- eslint-skip -->
```js invalid
if (booleanMethod() === true) { /* ... */ }
if (booleanMethod() === false) { /* ... */ }
if (booleanMethod() || false) { /* ... */ }
doSomething(!false);
doSomething(booleanMethod() === true);
```

## Valid

```js valid
if (booleanMethod()) { /* ... */ }
if (!booleanMethod()) { /* ... */ }
if (booleanMethod()) { /* ... */ }
doSomething(true);
doSomething(booleanMethod());
```

