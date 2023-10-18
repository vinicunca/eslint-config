# named-tuple-spacing

Expect space before type declaration in named tuple.

## Invalid

<!-- eslint-skip -->
```js invalid
type T = [i:number];

type T = [i:  number];

type T = [i?:number];

type T = [i?   :number];

type T = [i : number];

type T = [i  : number];

type T = [i  ?  : number];

type T = [i:number, j:number];

type T = [i:()=>void, j:number];
```

## Valid

<!-- eslint-skip -->
```ts valid
type T = [i: number];

type T = [i?: number];

type T = [i: number, j: number];

type T = [i: number, j: () => string];

const emit = defineEmits<{
  change: [id: number];
  update: [value: string];
}>();
```
