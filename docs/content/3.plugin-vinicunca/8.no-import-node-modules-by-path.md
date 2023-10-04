# no-import-node-modules-by-path

Prevent importing modules in `node_modules` folder by relative or absolute path.

## Invalid

<!-- eslint-skip -->
```js invalid
import a from '../node_modules/a';
import '../node_modules/b';

const c = require('../node_modules/c');
require('../node_modules/d');
```

## Valid

<!-- eslint-skip -->
```js valid
import xxx from 'a';
import 'b';

const c = require('c');
require('d');
```
