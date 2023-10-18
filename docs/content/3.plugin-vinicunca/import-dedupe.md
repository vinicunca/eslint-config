# import-dedupe

Auto-fix import deduplication.

## Invalid

<!-- eslint-skip -->
```js invalid
import { Foo, Bar, Foo } from 'foo';
```

## Valid

<!-- eslint-skip -->
```js valid
import { Bar, Foo } from 'foo';
```
