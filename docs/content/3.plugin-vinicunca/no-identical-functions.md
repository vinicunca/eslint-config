# no-identical-functions

When two functions have the same implementation, either it was a mistake - something else was intended - or the
duplication was intentional, but may be confusing to maintainers. In the latter case, the code should be refactored.

## Invalid

<!-- eslint-skip -->
```js invalid
function calculateCode() {
  doTheThing();
  doOtherThing();
  return code;
}

function getName() {
  doTheThing();
  doOtherThing();
  return code;
}
```

## Valid

```js valid
function calculateCode() {
  doTheThing();
  doOtherThing();
  return code;
}

function getName() {
  return calculateCode();
}
```

## Configuration

This rule has a numeric option (defaulted to 3) to specify the minimum number of lines to trigger an issue. Lines between curly braces are taken into consideration.

```json
{
  "no-identical-functions": ["error", 5]
}
```
