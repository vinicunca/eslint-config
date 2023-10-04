# if-newline

Enforce line breaks between `if` statements and their consequent / alternate expressions. Only applicable for inline `if` statements.

## Invalid

<!-- eslint-skip -->
```js invalid
if (foo) bar();
```

## Valid

<!-- eslint-skip -->
```js valid
if (foo) {
  bar();
};
```
