# no-ignored-return

When the call to a function doesn’t have any side effects, what is the point of making the call if the results are ignored? In such case, either the function call is useless and should be dropped or the source code doesn’t behave as expected.

To prevent generating any false-positives, this rule triggers an issues only on a predefined list of known objects &amp; functions.

::docs-alert{type="danger" title="WIP"}

This rule is not available yet and is still a work in progress.

::

## Invalid

```js invalid
'hello'.lastIndexOf('e');
```

## Valid

```js valid
const char = 'hello'.lastIndexOf('e');
```
