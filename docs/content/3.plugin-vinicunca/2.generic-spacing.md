# generic-spacing

Spaces around generic type parameters.

## Invalid

<!-- eslint-skip -->
```ts invalid
type Foo<T=true> = T;

type Foo<T,K> = T;

type Foo<T=false,K=1|2> = T;

function foo <T>() {}

interface Log {
  foo <T>(name: T): void
}
```

## Valid

<!-- eslint-skip -->
```ts valid
type Foo<T = true> = T;

type Foo<T extends true = true> = T;

type Foo<
  T = true,
  K = false
> = T;

function foo<
  T
>() {}

const foo = <T>(name: T) => name;

interface Log {
  foo<T>(name: T): void;
}

interface Log {
  <T>(name: T): void;
}

interface Foo {
  foo?: <T>(name: T) => void;
}

type Foo<
T = true,
K = false,
> = T;
```
