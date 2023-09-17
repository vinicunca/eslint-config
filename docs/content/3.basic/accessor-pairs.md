---
description: 'Enforce getter and setter pairs in objects and classes'
navigation:
  type: 'suggestions'
---

# `accessor-pairs`

It's a common mistake in JavaScript to create an object with just a setter for a property but never have a corresponding getter defined for it. Without a getter, you cannot read the property, so it ends up not being used.

The config that applied to this rule are:

```json
{
  "accessor-pairs": [
    "error",
    { "setWithoutGet": true, "enforceForClassMembers": true }
  ]
}
```

## Invalid

```js invalid
class Foo {
  set a(value) {
    this.val = value;
  }
}

const Bar = class {
  static set a(value) {
    this.val = value;
  }
};
```

## Valid

```js valid
class Foo {
  set a() {
    return this.val;
  }

  get a(value) {}
}

const Bar = class {
  static set a(value) {
    this.val = value;
  }

  static get a(value) {}
};
```
