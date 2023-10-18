# no-all-duplicated-branches

Having all branches in a `switch` or `if` chain with the same implementation is an error.
Either a copy-paste error was made and something different should be executed,
or there shouldn't be a `switch`/`if` chain at all. Note that this rule does not apply to
`if` chains without else, or to `switch` without `default` clauses.

## Invalid

<!-- eslint-skip -->
```js invalid
if (b == 0) {
  doOneMoreThing();
} else {
  doOneMoreThing();
}

let a = b === 0 ? getValue() : getValue();

switch (i) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomething();
    break;
  case 3:
    doSomething();
    break;
  default:
    doSomething();
}
```
