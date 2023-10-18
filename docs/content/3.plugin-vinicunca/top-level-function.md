# top-level-function

Enforce top-level function to be declared using `function` instead of arrow function. With auto-fix.

## Invalid

<!-- eslint-skip -->
```ts invalid
export const square = (a: number, b: number): number => {
  const a2 = a * a;
  const b2 = b * b;
  return a2 + b2 + 2 * a * b;
};
```

## Valid

```ts valid
export function square(a: number, b: number): number {
  const a2 = a * a;
  const b2 = b * b;
  return a2 + b2 + 2 * a * b;
}
```

### Exceptions

When the variable is assigned with types, the rule will ignore it.

```ts valid
export const square: MyFunction = (a: number, b: number): number => {
  const a2 = a * a;
  const b2 = b * b;
  return a2 + b2 + 2 * a * b;
};
```
