# no-empty-collection

When a collection is empty it makes no sense to access or iterate it. Doing so anyway is surely an error; either population was accidentally omitted or the developer doesn’t understand the situation.

## Invalid

<!-- eslint-skip -->
```js invalid
let strings = [];

if (strings.includes("foo")) {}

for (str of strings) {}

strings.forEach(str => doSomething(str));
```
