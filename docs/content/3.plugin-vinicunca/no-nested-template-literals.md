# no-nested-template-literals

Template literals (previously named "template strings") are an elegant way to build a string without using the `+` operator to make strings concatenation more readable.

However, it’s possible to build complex string literals by nesting together multiple template literals, and therefore lose readability and maintainability.

In such situations, it’s preferable to move the nested template into a separate statement.

## Invalid

<!-- eslint-skip -->
```js invalid
const color = 'red';
const count = 3;
// nested template strings not easy to read
const message = `I have ${color ? `${count} ${color}` : count} apples`;
```

## Valid

```js valid
const color = 'red';
const count = 3;
const apples = color ? `${count} ${color}` : count;
const message = `I have ${apples} apples`;
```

## Exceptions

Nested template is ignored when the nesting one starts and ends on a different line.

```js valid
const color = 'red';
const count = 3;
const message = `I have 
                  ${color ? `${count} ${color}` : count} 
              apples`;
```
