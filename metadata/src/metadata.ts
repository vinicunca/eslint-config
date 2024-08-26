import type { ConfigInfo } from './types';

export const configs: ReadonlyArray<ConfigInfo> = Object.freeze([
  {
    "name": "vinicunca/javascript/setup",
    "plugins": [],
    "rules": []
  },
  {
    "name": "vinicunca/javascript/rules",
    "plugins": [
      "antfu",
      "unused-imports"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce getter and setter pairs in objects and classes",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/accessor-pairs"
          }
        },
        "name": "accessor-pairs",
        "options": [
          {
            "enforceForClassMembers": true,
            "setWithoutGet": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce `return` statements in callbacks of array methods",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/array-callback-return"
          },
          "hasSuggestions": true
        },
        "name": "array-callback-return",
        "options": [
          {
            "checkForEach": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce the use of variables within the scope they are defined",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/block-scoped-var"
          }
        },
        "name": "block-scoped-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce camelcase naming convention",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/camelcase"
          }
        },
        "name": "camelcase",
        "options": [
          {
            "allow": [
              "^UNSAFE_"
            ],
            "ignoreGlobals": true,
            "properties": "never"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require `super()` calls in constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/constructor-super"
          }
        },
        "name": "constructor-super",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce default clauses in switch statements to be last",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/default-case-last"
          }
        },
        "name": "default-case-last",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce dot notation whenever possible",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/dot-notation"
          },
          "fixable": "code"
        },
        "name": "dot-notation",
        "options": [
          {
            "allowKeywords": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require the use of `===` and `!==`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/eqeqeq"
          },
          "fixable": "code"
        },
        "name": "eqeqeq",
        "options": [
          "smart"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce \"for\" loop update clause moving the counter in the right direction",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/for-direction"
          },
          "fixable": null
        },
        "name": "for-direction",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require constructor names to begin with a capital letter",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/new-cap"
          }
        },
        "name": "new-cap",
        "options": [
          {
            "capIsNew": false,
            "properties": true
          }
        ]
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `alert`, `confirm`, and `prompt`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-alert"
          }
        },
        "name": "no-alert",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `Array` constructors",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-array-constructor"
          },
          "hasSuggestions": true
        },
        "name": "no-array-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow using an async function as a Promise executor",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-async-promise-executor"
          },
          "fixable": null
        },
        "name": "no-async-promise-executor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `await` inside of loops",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-await-in-loop"
          }
        },
        "name": "no-await-in-loop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `arguments.caller` or `arguments.callee`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-caller"
          }
        },
        "name": "no-caller",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow lexical declarations in case clauses",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-case-declarations"
          },
          "hasSuggestions": true
        },
        "name": "no-case-declarations",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning class members",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-class-assign"
          }
        },
        "name": "no-class-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow comparing against -0",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-compare-neg-zero"
          },
          "fixable": null
        },
        "name": "no-compare-neg-zero",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow assignment operators in conditional expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-cond-assign"
          }
        },
        "name": "no-cond-assign",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `console`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-console"
          },
          "hasSuggestions": true
        },
        "name": "no-console",
        "options": [
          {
            "allow": [
              "warn",
              "error"
            ]
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning `const` variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-const-assign"
          }
        },
        "name": "no-const-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow expressions where the operation doesn't affect the value",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-constant-binary-expression"
          }
        },
        "name": "no-constant-binary-expression",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow constant expressions in conditions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-constant-condition"
          }
        },
        "name": "no-constant-condition",
        "options": [
          {
            "checkLoops": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow returning value from constructor",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-constructor-return"
          },
          "fixable": null
        },
        "name": "no-constructor-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow control characters in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-control-regex"
          }
        },
        "name": "no-control-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of `debugger`",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-debugger"
          },
          "fixable": null
        },
        "name": "no-debugger",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow deleting variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-delete-var"
          }
        },
        "name": "no-delete-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate arguments in `function` definitions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-args"
          }
        },
        "name": "no-dupe-args",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate class members",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-class-members"
          }
        },
        "name": "no-dupe-class-members",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate conditions in if-else-if chains",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-else-if"
          }
        },
        "name": "no-dupe-else-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate keys in object literals",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-keys"
          }
        },
        "name": "no-dupe-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate case labels",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-duplicate-case"
          }
        },
        "name": "no-duplicate-case",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Disallow empty block statements",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-empty"
          }
        },
        "name": "no-empty",
        "options": [
          {
            "allowEmptyCatch": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow empty character classes in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-empty-character-class"
          }
        },
        "name": "no-empty-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow empty destructuring patterns",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-empty-pattern"
          }
        },
        "name": "no-empty-pattern",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `eval()`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-eval"
          }
        },
        "name": "no-eval",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning exceptions in `catch` clauses",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-ex-assign"
          }
        },
        "name": "no-ex-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow extending native types",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-extend-native"
          }
        },
        "name": "no-extend-native",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary calls to `.bind()`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-extra-bind"
          },
          "fixable": "code"
        },
        "name": "no-extra-bind",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary boolean casts",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-extra-boolean-cast"
          },
          "fixable": "code"
        },
        "name": "no-extra-boolean-cast",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow fallthrough of `case` statements",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-fallthrough"
          }
        },
        "name": "no-fallthrough",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning `function` declarations",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-func-assign"
          }
        },
        "name": "no-func-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow assignments to native objects or read-only global variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-global-assign"
          }
        },
        "name": "no-global-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `eval()`-like methods",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-implied-eval"
          }
        },
        "name": "no-implied-eval",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow assigning to imported bindings",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-import-assign"
          }
        },
        "name": "no-import-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow invalid regular expression strings in `RegExp` constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-invalid-regexp"
          }
        },
        "name": "no-invalid-regexp",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow use of `this` in contexts where the value of `this` is `undefined`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-invalid-this"
          }
        },
        "name": "no-invalid-this",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow irregular whitespace",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-irregular-whitespace"
          }
        },
        "name": "no-irregular-whitespace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of the `__iterator__` property",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-iterator"
          }
        },
        "name": "no-iterator",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow labeled statements",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-labels"
          }
        },
        "name": "no-labels",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary nested blocks",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-lone-blocks"
          }
        },
        "name": "no-lone-blocks",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow literal numbers that lose precision",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-loss-of-precision"
          }
        },
        "name": "no-loss-of-precision",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow characters which are made with multiple code points in character class syntax",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-misleading-character-class"
          },
          "hasSuggestions": true
        },
        "name": "no-misleading-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow multiline strings",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-multi-str"
          }
        },
        "name": "no-multi-str",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow nested ternary expressions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-nested-ternary"
          }
        },
        "name": "no-nested-ternary",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `new` operators outside of assignments or comparisons",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-new"
          }
        },
        "name": "no-new",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `new` operators with the `Function` object",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-new-func"
          }
        },
        "name": "no-new-func",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `new` operators with the `Symbol` object",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-new-symbol"
          },
          "deprecated": true,
          "replacedBy": [
            "no-new-native-nonconstructor"
          ]
        },
        "name": "no-new-symbol",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-new-wrappers"
          }
        },
        "name": "no-new-wrappers",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow calling global object properties as functions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-obj-calls"
          }
        },
        "name": "no-obj-calls",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow calls to the `Object` constructor without an argument",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-object-constructor"
          },
          "hasSuggestions": true
        },
        "name": "no-object-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow octal literals",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-octal"
          }
        },
        "name": "no-octal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow octal escape sequences in string literals",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-octal-escape"
          }
        },
        "name": "no-octal-escape",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow returning values from Promise executor functions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-promise-executor-return"
          },
          "hasSuggestions": true
        },
        "name": "no-promise-executor-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of the `__proto__` property",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-proto"
          }
        },
        "name": "no-proto",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow calling some `Object.prototype` methods directly on objects",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-prototype-builtins"
          },
          "hasSuggestions": true
        },
        "name": "no-prototype-builtins",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow variable redeclaration",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-redeclare"
          }
        },
        "name": "no-redeclare",
        "options": [
          {
            "builtinGlobals": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow multiple spaces in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-regex-spaces"
          },
          "fixable": "code"
        },
        "name": "no-regex-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow specified global variables",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-restricted-globals"
          }
        },
        "name": "no-restricted-globals",
        "options": [
          {
            "message": "Use `globalThis` instead.",
            "name": "global"
          },
          {
            "message": "Use `globalThis` instead.",
            "name": "self"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow certain properties on certain objects",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-restricted-properties"
          }
        },
        "name": "no-restricted-properties",
        "options": [
          {
            "message": "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
            "property": "__proto__"
          },
          {
            "message": "Use `Object.defineProperty` instead.",
            "property": "__defineGetter__"
          },
          {
            "message": "Use `Object.defineProperty` instead.",
            "property": "__defineSetter__"
          },
          {
            "message": "Use `Object.getOwnPropertyDescriptor` instead.",
            "property": "__lookupGetter__"
          },
          {
            "message": "Use `Object.getOwnPropertyDescriptor` instead.",
            "property": "__lookupSetter__"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow specified syntax",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-restricted-syntax"
          }
        },
        "name": "no-restricted-syntax",
        "options": [
          "DebuggerStatement",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow assignment operators in `return` statements",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-return-assign"
          }
        },
        "name": "no-return-assign",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow assignments where both sides are exactly the same",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-self-assign"
          }
        },
        "name": "no-self-assign",
        "options": [
          {
            "props": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow comparisons where both sides are exactly the same",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-self-compare"
          }
        },
        "name": "no-self-compare",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow comma operators",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-sequences"
          }
        },
        "name": "no-sequences",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow identifiers from shadowing restricted names",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-shadow-restricted-names"
          }
        },
        "name": "no-shadow-restricted-names",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow sparse arrays",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-sparse-arrays"
          }
        },
        "name": "no-sparse-arrays",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow template literal placeholder syntax in regular strings",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-template-curly-in-string"
          }
        },
        "name": "no-template-curly-in-string",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `this`/`super` before calling `super()` in constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-this-before-super"
          }
        },
        "name": "no-this-before-super",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow throwing literals as exceptions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-throw-literal"
          }
        },
        "name": "no-throw-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of undeclared variables unless mentioned in `/*global */` comments",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-undef"
          }
        },
        "name": "no-undef",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow initializing variables to `undefined`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-undef-init"
          },
          "fixable": "code"
        },
        "name": "no-undef-init",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow confusing multiline expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unexpected-multiline"
          }
        },
        "name": "no-unexpected-multiline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unmodified loop conditions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unmodified-loop-condition"
          }
        },
        "name": "no-unmodified-loop-condition",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow ternary operators when simpler alternatives exist",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unneeded-ternary"
          },
          "fixable": "code"
        },
        "name": "no-unneeded-ternary",
        "options": [
          {
            "defaultAssignment": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unreachable"
          }
        },
        "name": "no-unreachable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow loops with a body that allows only one iteration",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unreachable-loop"
          }
        },
        "name": "no-unreachable-loop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow control flow statements in `finally` blocks",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unsafe-finally"
          }
        },
        "name": "no-unsafe-finally",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow negating the left operand of relational operators",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unsafe-negation"
          },
          "hasSuggestions": true,
          "fixable": null
        },
        "name": "no-unsafe-negation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unused expressions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unused-expressions"
          }
        },
        "name": "no-unused-expressions",
        "options": [
          {
            "allowShortCircuit": true,
            "allowTaggedTemplates": true,
            "allowTernary": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unused-vars"
          }
        },
        "name": "no-unused-vars",
        "options": [
          {
            "args": "none",
            "caughtErrors": "none",
            "ignoreRestSiblings": true,
            "vars": "all"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of variables before they are defined",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-use-before-define"
          }
        },
        "name": "no-use-before-define",
        "options": [
          {
            "classes": false,
            "functions": false,
            "variables": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow useless backreferences in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-useless-backreference"
          }
        },
        "name": "no-useless-backreference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary calls to `.call()` and `.apply()`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-call"
          }
        },
        "name": "no-useless-call",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary `catch` clauses",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-useless-catch"
          }
        },
        "name": "no-useless-catch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary computed property keys in objects and classes",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-computed-key"
          },
          "fixable": "code"
        },
        "name": "no-useless-computed-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary constructors",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-constructor"
          }
        },
        "name": "no-useless-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow renaming import, export, and destructured assignments to the same name",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-rename"
          },
          "fixable": "code"
        },
        "name": "no-useless-rename",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow redundant return statements",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-return"
          },
          "fixable": "code"
        },
        "name": "no-useless-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `let` or `const` instead of `var`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-var"
          },
          "fixable": "code"
        },
        "name": "no-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `with` statements",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-with"
          }
        },
        "name": "no-with",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require or disallow method and property shorthand syntax for object literals",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/object-shorthand"
          },
          "fixable": "code"
        },
        "name": "object-shorthand",
        "options": [
          "always",
          {
            "avoidQuotes": true,
            "ignoreConstructors": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce variables to be declared either together or separately in functions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/one-var"
          },
          "fixable": "code"
        },
        "name": "one-var",
        "options": [
          {
            "initialized": "never"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require using arrow functions for callbacks",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-arrow-callback"
          },
          "fixable": "code"
        },
        "name": "prefer-arrow-callback",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `const` declarations for variables that are never reassigned after declared",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-const"
          },
          "fixable": "code"
        },
        "name": "prefer-const",
        "options": [
          {
            "destructuring": "all",
            "ignoreReadBeforeAssign": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `Math.pow` in favor of the `**` operator",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-exponentiation-operator"
          },
          "fixable": "code"
        },
        "name": "prefer-exponentiation-operator",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require using Error objects as Promise rejection reasons",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-promise-reject-errors"
          },
          "fixable": null
        },
        "name": "prefer-promise-reject-errors",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow use of the `RegExp` constructor in favor of regular expression literals",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-regex-literals"
          },
          "hasSuggestions": true
        },
        "name": "prefer-regex-literals",
        "options": [
          {
            "disallowRedundantWrapping": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require rest parameters instead of `arguments`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-rest-params"
          }
        },
        "name": "prefer-rest-params",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require spread operators instead of `.apply()`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-spread"
          },
          "fixable": null
        },
        "name": "prefer-spread",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require template literals instead of string concatenation",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-template"
          },
          "fixable": "code"
        },
        "name": "prefer-template",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted import declarations within modules",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/sort-imports"
          },
          "fixable": "code"
        },
        "name": "sort-imports",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require symbol descriptions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/symbol-description"
          },
          "fixable": null
        },
        "name": "symbol-description",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow Unicode byte order mark (BOM)",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/unicode-bom"
          },
          "fixable": "whitespace"
        },
        "name": "unicode-bom",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-imports",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-vars",
        "options": [
          {
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "ignoreRestSiblings": true,
            "vars": "all",
            "varsIgnorePattern": "^_"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Require calls to `isNaN()` when checking for `NaN`",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/use-isnan"
          }
        },
        "name": "use-isnan",
        "options": [
          {
            "enforceForIndexOf": true,
            "enforceForSwitchCase": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce comparing `typeof` expressions against valid strings",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/valid-typeof"
          },
          "hasSuggestions": true
        },
        "name": "valid-typeof",
        "options": [
          {
            "requireStringLiterals": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `var` declarations be placed at the top of their containing scope",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/vars-on-top"
          }
        },
        "name": "vars-on-top",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require or disallow \"Yoda\" conditions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/yoda"
          },
          "fixable": "code"
        },
        "name": "yoda",
        "options": [
          "never"
        ]
      }
    ]
  },
  {
    "files": [
      "**/scripts/**/*.?([cm])[jt]s?(x)",
      "**/cli.?([cm])[jt]s?(x)"
    ],
    "name": "vinicunca/javascript/disables",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `console`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-console"
          },
          "hasSuggestions": true
        },
        "name": "no-console",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/eslint-comments/rules",
    "plugins": [
      "eslint-comments"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow a `eslint-enable` comment for multiple `eslint-disable` comments",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html"
          },
          "fixable": null,
          "type": "suggestion"
        },
        "name": "eslint-comments/no-aggregating-enable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate `eslint-disable` comments",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html"
          },
          "fixable": null,
          "type": "problem"
        },
        "name": "eslint-comments/no-duplicate-disable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow `eslint-disable` comments without rule names",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html"
          },
          "fixable": null,
          "type": "suggestion"
        },
        "name": "eslint-comments/no-unlimited-disable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unused `eslint-enable` comments",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html"
          },
          "fixable": null,
          "type": "problem"
        },
        "name": "eslint-comments/no-unused-enable",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/node/rules",
    "plugins": [
      "node"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require error handling in callbacks",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md"
          },
          "fixable": null
        },
        "name": "node/handle-callback-err",
        "options": [
          "^(err|error)$"
        ]
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "enforce Node.js-style error-first callback pattern is followed",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md"
          },
          "type": "problem",
          "fixable": null
        },
        "name": "node/no-callback-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow deprecated APIs",
            "recommended": true,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md"
          },
          "type": "problem",
          "fixable": null
        },
        "name": "node/no-deprecated-api",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow the assignment to `exports`",
            "recommended": true,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md"
          },
          "fixable": null,
          "type": "problem"
        },
        "name": "node/no-exports-assign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow `new` operators with calls to `require`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md"
          },
          "fixable": null
        },
        "name": "node/no-new-require",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow string concatenation with `__dirname` and `__filename`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md"
          },
          "fixable": null
        },
        "name": "node/no-path-concat",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce either `Buffer` or `require(\"buffer\").Buffer`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md"
          },
          "type": "suggestion",
          "fixable": null
        },
        "name": "node/prefer-global/buffer",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce either `process` or `require(\"process\")`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md"
          },
          "type": "suggestion",
          "fixable": null
        },
        "name": "node/prefer-global/process",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require that `process.exit()` expressions use the same code path as `throw`",
            "recommended": true,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md"
          },
          "type": "problem",
          "fixable": null,
          "supported": false
        },
        "name": "node/process-exit-as-throw",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/jsdoc/rules",
    "plugins": [
      "jsdoc"
    ],
    "rules": [
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Checks that `@access` tags have a valid value.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/check-access",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Reports invalid alignment of JSDoc block asterisks.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "jsdoc/check-alignment",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Ensures that parameter names in JSDoc match those in the function declaration.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/check-param-names",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/check-property-names",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Reports invalid types.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/check-types",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Expects specific tags to be empty of any content.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/empty-tags",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Reports an issue with any non-constructor function using `@implements`.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/implements-on-classes",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/multiline-blocks",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "This rule reports defaults being used on the relevant portion of `@param` or `@default`.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/no-defaults",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/no-multi-asterisks",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "This rule reports types being used on `@param` or `@returns`.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/no-types",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires that all function parameters have names.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-param-name",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsdoc/require-property",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires that each `@property` tag has a `description` value.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-property-description",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires that all function `@property` tags have names.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-property-name",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-returns-check",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires that the `@returns` tag has a `description` value.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-returns-description",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/require-yields-check",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "Requires all types to be valid JSDoc or Closure compiler types without syntax errors.",
            "url": "https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header"
          },
          "type": "suggestion"
        },
        "name": "jsdoc/valid-types",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/imports/rules",
    "plugins": [
      "antfu",
      "import"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Fix duplication in imports",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/import-dedupe.md"
          },
          "fixable": "code"
        },
        "name": "antfu/import-dedupe",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Prevent importing modules in `dist` folder",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/no-import-dist.test.ts"
          }
        },
        "name": "antfu/no-import-dist",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Prevent importing modules in `node_modules` folder by relative or absolute path",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/no-import-node-modules-by-path.test.ts"
          }
        },
        "name": "antfu/no-import-node-modules-by-path",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "category": "Helpful warnings",
            "description": "Forbid any invalid exports, i.e. re-export of the same name.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/export.md"
          }
        },
        "name": "import/export",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "category": "Style guide",
            "description": "Ensure all imports appear before other statements.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/first.md"
          },
          "fixable": "code"
        },
        "name": "import/first",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "category": "Style guide",
            "description": "Forbid repeated import of the same module in multiple places.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-duplicates.md"
          },
          "fixable": "code"
        },
        "name": "import/no-duplicates",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "category": "Helpful warnings",
            "description": "Forbid the use of mutable exports with `var` or `let`.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-mutable-exports.md"
          }
        },
        "name": "import/no-mutable-exports",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "category": "Style guide",
            "description": "Forbid named default exports.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-named-default.md"
          }
        },
        "name": "import/no-named-default",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "category": "Static analysis",
            "description": "Forbid a module from importing itself.",
            "recommended": true,
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-self-import.md"
          }
        },
        "name": "import/no-self-import",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "category": "Static analysis",
            "description": "Forbid webpack loader syntax in imports.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-webpack-loader-syntax.md"
          }
        },
        "name": "import/no-webpack-loader-syntax",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "category": "Style guide",
            "description": "Enforce a convention in module import order.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/order.md"
          },
          "fixable": "code"
        },
        "name": "import/order",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "category": "Style guide",
            "description": "Enforce a newline after import statements.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/newline-after-import.md"
          },
          "fixable": "whitespace"
        },
        "name": "import/newline-after-import",
        "options": [
          {
            "count": 1,
            "considerComments": true
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/bin/**/*",
      "**/bin.?([cm])[jt]s?(x)"
    ],
    "name": "vinicunca/imports/disables/bin",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Prevent importing modules in `dist` folder",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/no-import-dist.test.ts"
          }
        },
        "name": "antfu/no-import-dist",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Prevent importing modules in `node_modules` folder by relative or absolute path",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/no-import-node-modules-by-path.test.ts"
          }
        },
        "name": "antfu/no-import-node-modules-by-path",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/unicorn/rules",
    "plugins": [
      "unicorn"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce passing a `message` value when creating a built-in error.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/error-message.md"
          }
        },
        "name": "unicorn/error-message",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require escape sequences to use uppercase values.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/escape-case.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/escape-case",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `Array.isArray()` instead of `instanceof Array`.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/no-instanceof-array.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/no-instanceof-array",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `new Array()`.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/no-new-array.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "unicorn/no-new-array",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/no-new-buffer.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "unicorn/no-new-buffer",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce proper case for numeric literals.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/number-literal-case.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/number-literal-case",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prefer `.textContent` over `.innerText`.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-dom-node-text-content.md"
          },
          "hasSuggestions": true
        },
        "name": "unicorn/prefer-dom-node-text-content",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-includes.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "unicorn/prefer-includes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prefer using the `node:` protocol when importing Node.js builtin modules.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-node-protocol.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/prefer-node-protocol",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prefer `Number` static properties over global ones.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-number-properties.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "unicorn/prefer-number-properties",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-string-starts-ends-with.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "unicorn/prefer-string-starts-ends-with",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce throwing `TypeError` in type checking conditions.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/prefer-type-error.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/prefer-type-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `new` when creating an error.",
            "recommended": true,
            "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/throw-new-error.md"
          },
          "fixable": "code"
        },
        "name": "unicorn/throw-new-error",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/command/rules",
    "plugins": [
      "command"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Comment-as-command for one-off codemod with ESLint",
            "url": "https://github.com/antfu/eslint-plugin-command"
          },
          "fixable": "code"
        },
        "name": "command/command",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/perfectionist/rules",
    "plugins": [
      "perfectionist"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted variable declarations.",
            "url": "https://perfectionist.dev/rules/sort-variable-declarations"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-variable-declarations",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted intersection types.",
            "url": "https://perfectionist.dev/rules/sort-intersection-types"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-intersection-types",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted Svelte attributes.",
            "url": "https://perfectionist.dev/rules/sort-svelte-attributes"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-svelte-attributes",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted Astro attributes.",
            "url": "https://perfectionist.dev/rules/sort-astro-attributes"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-astro-attributes",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted Vue attributes.",
            "url": "https://perfectionist.dev/rules/sort-vue-attributes"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-vue-attributes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted arrays before include method.",
            "url": "https://perfectionist.dev/rules/sort-array-includes"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-array-includes",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted named imports.",
            "url": "https://perfectionist.dev/rules/sort-named-imports"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-named-imports",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted named exports.",
            "url": "https://perfectionist.dev/rules/sort-named-exports"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-named-exports",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted object types.",
            "url": "https://perfectionist.dev/rules/sort-object-types"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-object-types",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted union types.",
            "url": "https://perfectionist.dev/rules/sort-union-types"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-union-types",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted switch cases.",
            "url": "https://perfectionist.dev/rules/sort-switch-case"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-switch-case",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted interface properties.",
            "url": "https://perfectionist.dev/rules/sort-interfaces"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-interfaces",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted JSX props.",
            "url": "https://perfectionist.dev/rules/sort-jsx-props"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-jsx-props",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted classes.",
            "url": "https://perfectionist.dev/rules/sort-classes"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-classes",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted imports.",
            "url": "https://perfectionist.dev/rules/sort-imports"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-imports",
        "options": [
          {
            "internalPattern": [
              "~/**",
              "~~/**"
            ],
            "type": "natural"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted exports.",
            "url": "https://perfectionist.dev/rules/sort-exports"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-exports",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted objects.",
            "url": "https://perfectionist.dev/rules/sort-objects"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-objects",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted TypeScript enums.",
            "url": "https://perfectionist.dev/rules/sort-enums"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-enums",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce sorted Map elements.",
            "url": "https://perfectionist.dev/rules/sort-maps"
          },
          "fixable": "code"
        },
        "name": "perfectionist/sort-maps",
        "options": [
          {
            "type": "natural",
            "order": "asc"
          }
        ]
      }
    ]
  },
  {
    "name": "vinicunca/sonar/rules",
    "plugins": [
      "sonar"
    ],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Property getters and setters should come in pairs",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2376/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/accessor-pairs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Image, area, button with image and object elements should have an alternative text",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1077/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/alt-text",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Anchors should contain accessible content",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6827/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "sonar/anchor-has-content",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Anchor tags should not be used as buttons",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6844/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/anchor-is-valid",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Alternatives in regular expressions should be grouped when used with anchors",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5850/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/anchor-precedence",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Arguments to built-in functions should match documented types",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3782/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/argument-type",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Parameters should be passed in the correct order",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2234/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/arguments-order",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"arguments\" should not be accessed directly",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3513/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/arguments-usage",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Callbacks of array methods should have return statements",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3796/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/array-callback-without-return",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Array constructors should not be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1528/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/array-constructor",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Braces and parentheses should be used consistently with arrow functions",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3524/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/arrow-function-convention",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Tests should include assertions",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2699/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/assertions-in-tests",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Creating public APIs is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6333/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-apigateway-public-api",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing public network access to cloud resources is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6329/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-ec2-rds-dms-public",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted EBS volumes is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6275/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-ec2-unencrypted-ebs-volume",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted EFS file systems is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6332/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-efs-unencrypted",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Policies granting all privileges are security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6302/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-iam-all-privileges",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Policies granting access to all resources of an account are security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6304/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-iam-all-resources-accessible",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "AWS IAM policies should limit the scope of permissions given",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6317/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-iam-privilege-escalation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Policies authorizing public access to resources are security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6270/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-iam-public-access",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted Elasticsearch domains is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6308/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-opensearchservice-domain",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted RDS DB resources is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6303/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-rds-unencrypted-databases",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Administration services access should be restricted to specific IP addresses",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6321/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-restricted-ip-admin-access",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Granting access to S3 buckets to all or authenticated users is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6265/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-s3-bucket-granted-access",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Authorizing HTTP communications with S3 buckets is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6249/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-s3-bucket-insecure-http",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing public ACLs or policies on a S3 bucket is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6281/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-s3-bucket-public-access",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling server-side encryption of S3 buckets is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6245/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/aws-s3-bucket-server-encryption",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling versioning of S3 buckets is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6252/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-s3-bucket-versioning",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted SageMaker notebook instances is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6319/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-sagemaker-unencrypted-notebook",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted SNS topics is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6327/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-sns-unencrypted-topics",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using unencrypted SQS queues is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6330/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/aws-sqs-unencrypted-queue",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Bitwise operators should not be used in boolean contexts",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1529/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/bitwise-operators",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Optional boolean parameters should have default value",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4798/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/bool-param-default",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [],
          "type": "suggestion",
          "docs": {
            "description": "An open curly brace should be located at the end of a line",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1105/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "whitespace"
        },
        "name": "sonar/brace-style",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Function call arguments should not start on new lines",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1472/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/call-argument-line",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling Certificate Transparency monitoring is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5742/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/certificate-transparency",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Chai assertions should have only one reason to succeed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6092/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/chai-determinate-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Class names should comply with a naming convention",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S101/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/class-name",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Class methods should be used instead of \"prototype\" assignments",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3525/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/class-prototype",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Dynamically executing code is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1523/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/code-eval",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Cognitive Complexity of functions should not be too high",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3776/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/cognitive-complexity",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Comma and logical OR operators should not be used in switch cases",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3616/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/comma-or-logical-or-case",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Track comments matching a regular expression",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S124/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/comment-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Regular expression quantifiers and character classes should be used concisely",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6353/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/concise-regex",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "A conditionally executed single line should be denoted by indentation",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3973/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/conditional-indentation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing confidential information to be logged is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5757/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/confidential-information-logging",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Objects should not be created to be dropped immediately without being used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1848/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/constructor-for-side-effects",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing requests with excessive content length is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5693/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/content-length",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling content security policy fetch directives is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5728/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/content-security-policy",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Creating cookies without the \"HttpOnly\" flag is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3330/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/cookie-no-httponly",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Writing cookies is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2255/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/cookies",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Having a permissive Cross-Origin Resource Sharing policy is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5122/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/cors",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling CSRF protections is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4502/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/csrf",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Cyclomatic Complexity of functions should not be too high",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1541/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/cyclomatic-complexity",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables and functions should not be declared in the global scope",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3798/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/declarations-in-global-scope",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Function parameters with default values should be last",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1788/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/default-param-last",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Deprecated APIs should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1874/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/deprecation",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Destructuring syntax should be used for assignments",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3514/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/destructuring-assignment-syntax",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Strict equality operators should not be used with dissimilar types",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3403/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/different-types-comparison",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling auto-escaping in template engines is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5247/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/disabled-auto-escaping",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using remote artifacts without integrity checks is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5725/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/disabled-resource-integrity",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling Mocha timeouts should be explicit",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6080/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/disabled-timeout",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing browsers to perform DNS prefetching is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5743/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/dns-prefetching",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Character classes in regular expressions should not contain the same character twice",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5869/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/duplicates-in-character-class",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"if ... else if\" constructs should end with \"else\" clauses",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S126/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/elseif-without-else",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Repeated patterns in regular expressions should not match the empty string",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5842/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/empty-string-repetition",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Encrypting data is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4787/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/encryption",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Encryption algorithms should be used with secure mode and padding scheme",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5542/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/encryption-secure-mode",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [],
          "type": "suggestion",
          "docs": {
            "description": "Trailing commas should be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3723/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/enforce-trailing-comma",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Replacement strings should reference existing regular expression groups",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6328/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/existing-groups",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Expressions should not be too complex",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1067/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/expression-complexity",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Track lack of copyright and license headers",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1451/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/file-header",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Default export names and file names should match",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3317/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/file-name-differ-from-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Setting loose POSIX file permissions is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2612/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/file-permissions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "File uploads should be restricted",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2598/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/file-uploads",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Track uses of \"FIXME\" tags",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1134/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/fixme-tag",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"for...in\" loops should filter properties before acting on them",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1535/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/for-in",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "A \"for\" loop update clause should move the counter in the right direction",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2251/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/for-loop-increment-sign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling content security policy frame-ancestors directive is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5732/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/frame-ancestors",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not be defined inside loops",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1515/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/function-inside-loop",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Function and method names should comply with a naming convention",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S100/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/function-name",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should always return the same type",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3800/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/function-return-type",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Future reserved words should not be used as identifiers",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1527/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/future-reserved-words",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Generators should explicitly \"yield\" a value",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3531/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/generator-without-yield",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using weak hashing algorithms is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4790/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/hashing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Statically serving hidden files is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5691/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/hidden-files",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "The return value of \"useState\" should be destructured and named symmetrically",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6754/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion",
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/hook-use-state",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "HTML elements should have a valid language attribute",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5254/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/html-has-lang",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"in\" should not be used with primitive types",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3785/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/in-operator-type-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should be called consistently with or without \"new\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3686/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/inconsistent-function-call",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"indexOf\" checks should not be for positive numbers",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2692/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/index-of-compare-to-positive-number",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Creating cookies without the \"secure\" flag is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2092/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/insecure-cookie",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "JWT should be signed and verified with strong cipher algorithms",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5659/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/insecure-jwt-token",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Assertion arguments should be passed in the correct order",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3415/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/inverted-assertion-arguments",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "JSX list components should have a key property",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6477/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/jsx-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "React Context Provider values should have stable identities",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6481/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/jsx-no-constructed-context-values",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "fixable": "code",
          "docs": {
            "description": "Redundant React fragments should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6749/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true
        },
        "name": "sonar/jsx-no-useless-fragment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Label elements should have a text label and an associated control",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6853/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/label-has-associated-control",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Only \"while\", \"do\", \"for\" and \"switch\" statements should be labelled",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1439/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/label-position",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Authorizing an opened window to access back to the originating window is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5148/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/link-with-target-blank",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"switch\" statements should not have too many \"case\" clauses",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1479/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/max-switch-cases",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Union types should not have too many elements",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4622/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/max-union-size",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Media elements should have captions",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4084/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/media-has-caption",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"for\" loop increment clauses should modify the loops' counters",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1994/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/misplaced-loop-counter",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Mouse events should have corresponding keyboard events",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1082/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/mouse-events-a11y",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Control flow statements \"if\", \"for\", \"while\", \"switch\" and \"try\" should not be nested too deeply",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S134/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/nested-control-flow",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Constructor names should start with an upper case letter",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2430/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/new-cap",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"new\" should only be used with functions and classes",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2999/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/new-operator-misuse",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Getters and setters should access the expected fields",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4275/javascript",
            "requiresTypeChecking": false
          },
          "fixable": null
        },
        "name": "sonar/no-accessor-field-mismatch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "All branches in a conditional structure should not have exactly the same implementation",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3923/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-all-duplicated-branches",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "\"Array.prototype.sort()\" and \"Array.prototype.toSorted()\" should use a compare function",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2871/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-alphabetical-sort",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling Angular built-in sanitization is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6268/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-angular-bypass-sanitization",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"delete\" should not be used on arrays",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2870/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-array-delete",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "JSX list components should not use array indexes as key",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6479/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/no-array-index-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Array indexes should be numeric",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3579/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-associative-arrays",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Objects and classes converted or coerced to strings should define a \"toString()\" method",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6551/javascript",
            "requiresTypeChecking": true
          },
          "type": "suggestion"
        },
        "name": "sonar/no-base-to-string",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Built-in objects should not be overridden",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2424/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-built-in-override",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"switch\" statements should not contain non-case labels",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1219/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-case-label-in-switch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using clear-text protocols is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5332/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-clear-text-protocols",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Tests should not execute any code after \"done()\" is called",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6079/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-code-after-done",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Mergeable \"if\" statements should be combined",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1066/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-collapsible-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Collection size and array length comparisons should make sense",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3981/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-collection-size-mischeck",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Sections of code should not be commented out",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S125/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-commented-code",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Unused assignments should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1854/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-dead-store",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"delete\" should be used only with object properties",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3001/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-delete-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Deprecated React APIs should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6957/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-deprecated-react",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Union and intersection types should not include duplicated constituents",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4621/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-duplicate-in-composite",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "String literals should not be duplicated",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1192/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-duplicate-string",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Two branches in a conditional structure should not have exactly the same implementation",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1871/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-duplicated-branches",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Collection elements should not be replaced unconditionally",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4143/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-element-overwrite",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6019/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-empty-after-reluctant",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Alternation in regular expressions should not contain empty alternatives",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6323/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-empty-alternatives",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Empty collections should not be accessed or iterated",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4158/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-empty-collection",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not be empty",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1186/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-empty-function",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Regular expressions should not contain empty groups",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6331/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-empty-group",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Interfaces should not be empty",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4023/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "sonar/no-empty-interface",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Test files should contain at least one test case",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2187/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-empty-test-file",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Equality operators should not be used in \"for\" loop termination conditions",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S888/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-equals-in-for-termination",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Exclusive tests should not be commited to version control",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6426/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-exclusive-tests",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Prototypes of builtin objects should not be modified",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6643/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-extend-native",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Function calls should not pass extra arguments",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S930/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-extra-arguments",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [
            "@stylistic/ts/no-extra-semi"
          ],
          "type": "suggestion",
          "docs": {
            "description": "Extra semicolons should be removed",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1116/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-extra-semi",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "React's \"findDOMNode\" should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6788/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/no-find-dom-node",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"for in\" should not be used with iterables",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4139/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-for-in-iterable",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Function declarations should not be made within blocks",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1530/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-function-declaration-in-block",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "The global \"this\" object should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2990/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-global-this",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Special identifiers should not be bound or assigned",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2137/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-globals-shadowing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Boolean expressions should not be gratuitous",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2589/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-gratuitous-expressions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Hard-coded credentials are security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2068/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-hardcoded-credentials",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using hardcoded IP addresses is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1313/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-hardcoded-ip",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "React's useState hook should not be used directly in the render function or body of a component",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6442/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-hook-setter-in-body",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"if/else if\" chains and \"switch\" cases should not have the same condition",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1862/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-identical-conditions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Identical expressions should not be used on both sides of a binary operator",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1764/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-identical-expressions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not have identical implementations",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4144/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-identical-functions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Exceptions should not be ignored",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2486/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-ignored-exceptions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Return values from functions without side effects should not be ignored",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2201/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-ignored-return",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Dependencies should be explicit",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4328/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-implicit-dependencies",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables should be declared explicitly",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2703/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-implicit-global",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "\"in\" should not be used on arrays",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4619/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-in-misuse",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Assertions should be complete",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2970/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-incomplete-assertions",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should use \"return\" consistently",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3801/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-inconsistent-returns",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Strings and non-strings should not be added",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3402/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-incorrect-string-concat",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Loops should not be infinite",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2189/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-infinite-loop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using intrusive permissions is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5604/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-intrusive-permissions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"await\" should only be used with promises",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4123/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-invalid-await",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Function returns should not be invariant",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3516/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-invariant-returns",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "fixable": "code",
          "type": "suggestion",
          "docs": {
            "description": "Boolean checks should not be inverted",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1940/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-inverted-boolean-check",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Forwarding client IP address is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5759/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-ip-forward",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Labels should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1119/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-labels",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Literals should not be used as functions",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6958/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-literal-call",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "If statements should not be the only statement in else blocks",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6660/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-lonely-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing browsers to sniff MIME types is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5734/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-mime-sniff",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Array-mutating methods should not be used misleadingly",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4043/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-misleading-array-reverse",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Promises should not be misused",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6544/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-misused-promises",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Allowing mixed-content is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5730/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-mixed-content",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Assignments should not be made from within sub-expressions",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1121/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-assignment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Ternary operators should not be nested",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3358/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-conditional",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not be nested too deeply",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2004/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-functions",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S881/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-incdec",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"switch\" statements should not be nested",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1821/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-switch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Template literals should not be nested",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4624/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-nested-template-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Loops with at most one iteration should be refactored",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1751/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-one-iteration-loop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Searching OS commands in PATH is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4036/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-os-command-from-path",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Initial values of parameters, caught exceptions, and loop variables should not be ignored",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1226/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-parameter-reassignment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Wrapper objects should not be used for primitive types",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1533/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-primitive-wrappers",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables and functions should not be redeclared",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2814/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-redeclare",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Assignments should not be redundant",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4165/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-redundant-assignments",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Boolean literals should not be used in comparisons",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1125/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-redundant-boolean",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Jump statements should not be redundant",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3626/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-redundant-jump",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Optional property declarations should not use both '?' and 'undefined' syntax",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4782/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-redundant-optional",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Redundant pairs of parentheses should be removed",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1110/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code",
          "deprecated": true
        },
        "name": "sonar/no-redundant-parentheses",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Type constituents of unions and intersections should not be redundant",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6571/javascript",
            "requiresTypeChecking": true
          },
          "type": "suggestion"
        },
        "name": "sonar/no-redundant-type-constituents",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Variables should be defined before being used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3827/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-reference-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling strict HTTP no-referrer policy is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5736/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-referrer-policy",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"import\" should be used to include external code",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3533/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-require-or-define",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Primitive return types should be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4324/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-return-type-any",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Assertions should not be given twice the same argument",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5863/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-same-argument-assert",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Conditionals should start on new lines",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3972/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-same-line-conditional",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"Number.isNaN()\" should be used to check for \"NaN\" value",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6679/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-self-compare",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"switch\" statements should have at least 3 \"case\" clauses",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1301/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-small-switch",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Tabulation characters should not be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S105/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/no-tab",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "HTML \"<table>\" should not be used for layout purposes",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5257/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-table-as-layout",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"this\" should not be assigned to variables",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4327/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-this-alias",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Literals should not be thrown",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3696/javascript",
            "requiresTypeChecking": true
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-throw-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Promise rejections should not be caught by \"try\" blocks",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4822/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-try-promise",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "\"undefined\" should not be passed as the value of optional parameters",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4623/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/no-undefined-argument",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"undefined\" should not be assigned",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2138/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-undefined-assignment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Multiline blocks should be enclosed in curly braces",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2681/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-unenclosed-multiline-block",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "JSX list components keys should match up between renders",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6486/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-uniq-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "JSX elements should not use unknown properties and attributes",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6747/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-unknown-property",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "All code should be reachable",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1763/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-unreachable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "React legacy lifecycle methods should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6791/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/no-unsafe",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Expanding archive files without controlling resource consumption is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5042/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-unsafe-unzip",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "React components should not be nested",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6478/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/no-unstable-nested-components",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Errors should not be created without being thrown",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3984/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-unthrown-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Collection contents should be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4030/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-unused-collection",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Non-empty statements should change control flow or have at least one side-effect",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S905/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-unused-expressions",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Unused function parameters should be removed",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1172/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-unused-function-argument",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Unused private class members should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1068/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-unused-private-class-members",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "The return value of void functions should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3699/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-use-of-empty-return-value",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Calls to \".call()\" and \".apply()\" methods should not be redundant",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6676/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-useless-call",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"catch\" clauses should do more than rethrow",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2737/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-useless-catch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Unnecessary constructors should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6647/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/no-useless-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Values should not be uselessly incremented",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2123/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-useless-increment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Type intersections should use meaningful types",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4335/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/no-useless-intersection",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "React state setter function should not be called with its matching state variable",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6443/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-useless-react-setstate",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables should be declared with \"let\" or \"const\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3504/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/no-var",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables declared with \"var\" should be declared before they are used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1526/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-variable-usage-before-declaration",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling Vue.js built-in escaping is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6299/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-vue-bypass-sanitization",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Cipher algorithms should be robust",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5547/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-weak-cipher",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Cryptographic keys should be robust",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4426/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-weak-keys",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Wildcard imports should not be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2208/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/no-wildcard-import",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Non-existent operators '=+', '=-' and '=!' should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2757/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/non-existent-operator",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Arithmetic operators should only have numbers as operands",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3760/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/non-number-in-arithmetic-expression",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Properties of variables with \"null\" or \"undefined\" values should not be accessed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2259/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/null-dereference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"<object>\" tags should provide an alternative content",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5264/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/object-alt-content",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Object literal shorthand syntax should be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3498/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/object-shorthand",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Arithmetic operations should not result in \"NaN\"",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3757/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/operation-returning-nan",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using shell interpreter when executing OS commands is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4721/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/os-command",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Origins should be verified during cross-origin communications",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2819/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/post-message",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"default\" clauses should be last",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4524/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/prefer-default-last",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enum member values should be either all initialized or none",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6572/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/prefer-enum-initializers",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"for of\" should be used with Iterables",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4138/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/prefer-for-of",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Function types should be preferred",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6598/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "sonar/prefer-function-type",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "fixable": "code",
          "type": "suggestion",
          "docs": {
            "description": "Local variables should not be declared and then immediately returned or thrown",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1488/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/prefer-immediate-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"module\" should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4156/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-namespace-keyword",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Nullish coalescing should be preferred",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6606/javascript",
            "requiresTypeChecking": true
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/prefer-nullish-coalescing",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Object literal syntax should be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2428/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/prefer-object-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Object spread syntax should be used instead of \"Object.assign\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6661/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-object-spread",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Shorthand promises should be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4634/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-promise-shorthand",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Return of boolean expressions should not be wrapped into an \"if-then-else\" statement",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1126/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-single-boolean-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Spread syntax should be used instead of \"apply()\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6666/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "sonar/prefer-spread",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Ends of strings should be checked with \"startsWith()\" and \"endsWith()\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6557/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "sonar/prefer-string-starts-ends-with",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Template strings should be used instead of concatenation",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3512/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-template",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Type predicates should be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4322/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/prefer-type-guard",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "fixable": "code",
          "type": "suggestion",
          "docs": {
            "description": "A \"while\" loop should be used instead of a \"for\" loop",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1264/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/prefer-while",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using command line arguments is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4823/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/process-argv",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Delivering code in production with debug features activated is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4507/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/production-debug",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using pseudorandom number generators (PRNGs) is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2245/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/pseudo-random",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Public \"static\" fields should be read-only",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1444/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/public-static-readonly",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using publicly writable directories is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5443/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/publicly-writable-directories",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"Array.reduce()\" calls should include an initial value",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6959/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/reduce-initial-value",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Redundant type aliases should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6564/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/redundant-type-aliases",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Regular expressions should not be too complicated",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5843/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/regex-complexity",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using regular expressions is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4784/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/regular-expr",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "React Hooks should be properly called",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6440/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/pluginRules-of-hooks",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [
            "@stylistic/ts/semi"
          ],
          "type": "suggestion",
          "docs": {
            "description": "Statements should end with semicolons",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1438/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/semi",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "A new session should be created during user authentication",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5876/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/session-regeneration",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Shorthand object properties should be grouped at the beginning or end of an object declaration",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3499/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/shorthand-property-grouping",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Character classes in regular expressions should not contain only one character",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6397/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/single-char-in-character-classes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Single-character alternations in regular expressions should be replaced with character classes",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6035/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/single-character-alternation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using slow regular expressions is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5852/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/slow-regex",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Using Sockets is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4818/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/sockets",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variables should be used in the blocks where they are declared",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2392/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-block-scoped-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "React components should not render non-boolean condition values",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6439/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/sonar-jsx-no-leaked-render",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Files should not have too many lines of code",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S104/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-max-lines",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not have too many lines of code",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S138/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-max-lines-per-function",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Functions should not have too many parameters",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S107/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-max-params",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Regular expressions should not contain control characters",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6324/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/sonar-no-control-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Member names should not be duplicated within a class or object literal",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1534/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/sonar-no-dupe-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Empty character classes should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2639/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/sonar-no-empty-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Switch cases should end with an unconditional \"break\" statement",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S128/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-no-fallthrough",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Regular expressions should be syntactically valid",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5856/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/sonar-no-invalid-regexp",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Magic numbers should not be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S109/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-no-magic-numbers",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Unicode Grapheme Clusters should be avoided inside regex character classes",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5868/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/sonar-no-misleading-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Regular expressions should not contain multiple spaces",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6326/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/sonar-no-regex-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Unused methods of React components should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6441/javascript",
            "requiresTypeChecking": false
          },
          "type": "suggestion"
        },
        "name": "sonar/sonar-no-unused-class-component-methods",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Unused local variables and functions should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1481/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sonar-no-unused-vars",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Optional chaining should be preferred",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6582/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "sonar/sonar-prefer-optional-chain",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "React props should be read-only",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6759/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/sonar-prefer-read-only-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "\"RegExp.exec()\" should be preferred over \"String.match()\"",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6594/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/sonar-prefer-regexp-exec",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Formatting SQL queries is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2077/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/sql-queries",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Tests should be stable",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5973/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/stable-tests",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Reading the Standard Input is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4829/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/standard-input",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Regular expressions with the global flag should be used with caution",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6351/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/stateful-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disabling Strict-Transport-Security policy is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5739/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/strict-transport-security",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Comparison operators should not be used with strings",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3003/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/strings-comparison",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"super()\" should be invoked appropriately",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3854/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/super-invocation",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "\"switch\" statements should have \"default\" clauses",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S131/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/switch-without-default",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Tables should have headers",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5256/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/table-header",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Table cells should reference their headers",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5260/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/table-header-reference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Tests should check which exception is thrown",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5958/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/test-check-exception",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Track uses of \"TODO\" tags",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1135/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/todo-tag",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Loops should not contain more than a single \"break\" or \"continue\" statement",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S135/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/too-many-break-or-continue-in-loop",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Regular expressions using Unicode character classes or property escapes should enable the unicode flag",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5867/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/unicode-aware-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Unnecessary character escapes should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S6535/javascript",
            "requiresTypeChecking": false
          },
          "hasSuggestions": true,
          "fixable": "code"
        },
        "name": "sonar/unnecessary-character-escapes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "suggestion",
          "docs": {
            "description": "Unnecessary imports should be removed",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1128/javascript",
            "requiresTypeChecking": true
          },
          "fixable": "code"
        },
        "name": "sonar/unused-import",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Names of regular expressions named groups should be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5860/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/unused-named-groups",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Server certificates should be verified during SSL/TLS connections",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4830/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/unverified-certificate",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Server hostnames should be verified during SSL/TLS connections",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5527/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/unverified-hostname",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "\"const\" variables should not be reassigned",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3500/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/updated-const-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Loop counters should not be assigned within the loop body",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2310/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/updated-loop-counter",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "\"NaN\" should not be used in comparisons",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2688/javascript",
            "requiresTypeChecking": false
          },
          "fixable": "code"
        },
        "name": "sonar/use-isnan",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Type aliases should be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4323/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/use-type-alias",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Results of operations on strings should not be ignored",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S1154/javascript",
            "requiresTypeChecking": true
          },
          "deprecated": true
        },
        "name": "sonar/useless-string-operation",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Values not convertible to numbers should not be used in numeric comparisons",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3758/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/values-not-convertible-to-numbers",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Variable, property and parameter names should comply with a naming convention",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S117/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/variable-name",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "\"void\" should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S3735/javascript",
            "requiresTypeChecking": true
          }
        },
        "name": "sonar/void-use",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Weak SSL/TLS protocols should not be used",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4423/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/weak-ssl",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Web SQL databases should not be used",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2817/javascript",
            "requiresTypeChecking": true
          },
          "deprecated": true
        },
        "name": "sonar/web-sql-database",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disclosing fingerprints from web application technologies is security-sensitive",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S5689/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/x-powered-by",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "XML parsers should not be vulnerable to XXE attacks",
            "recommended": true,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S2755/javascript",
            "requiresTypeChecking": false
          }
        },
        "name": "sonar/xml-parser-xxe",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Executing XPath expressions is security-sensitive",
            "recommended": false,
            "url": "https://sonarsource.github.io/rspec/#/rspec/S4817/javascript",
            "requiresTypeChecking": false
          },
          "deprecated": true
        },
        "name": "sonar/xpath",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.?([cm])jsx",
      "**/*.?([cm])tsx"
    ],
    "name": "vinicunca/jsx/setup",
    "plugins": [],
    "rules": []
  },
  {
    "name": "vinicunca/typescript/setup",
    "plugins": [
      "antfu",
      "ts"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.?([cm])ts",
      "**/*.?([cm])tsx"
    ],
    "name": "vinicunca/typescript/type-aware-parser",
    "plugins": [],
    "rules": []
  },
  {
    "files": [
      "**/*.?([cm])ts",
      "**/*.?([cm])tsx",
      "**/*.vue"
    ],
    "name": "vinicunca/typescript/parser",
    "plugins": [],
    "rules": []
  },
  {
    "files": [
      "**/*.?([cm])ts",
      "**/*.?([cm])tsx",
      "**/*.vue"
    ],
    "name": "vinicunca/typescript/rules",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require `super()` calls in constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/constructor-super"
          }
        },
        "name": "constructor-super",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce `return` statements in getters",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/getter-return"
          },
          "fixable": null
        },
        "name": "getter-return",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning `const` variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-const-assign"
          }
        },
        "name": "no-const-assign",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate arguments in `function` definitions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-args"
          }
        },
        "name": "no-dupe-args",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate class members",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-class-members"
          }
        },
        "name": "no-dupe-class-members",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate keys in object literals",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-dupe-keys"
          }
        },
        "name": "no-dupe-keys",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow reassigning `function` declarations",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-func-assign"
          }
        },
        "name": "no-func-assign",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow assigning to imported bindings",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-import-assign"
          }
        },
        "name": "no-import-assign",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `new` operators with the `Symbol` object",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-new-symbol"
          },
          "deprecated": true,
          "replacedBy": [
            "no-new-native-nonconstructor"
          ]
        },
        "name": "no-new-symbol",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `new` operators with global non-constructor functions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-new-native-nonconstructor"
          }
        },
        "name": "no-new-native-nonconstructor",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow calling global object properties as functions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-obj-calls"
          }
        },
        "name": "no-obj-calls",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow variable redeclaration",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-redeclare"
          }
        },
        "name": "no-redeclare",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow returning values from setters",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-setter-return"
          }
        },
        "name": "no-setter-return",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `this`/`super` before calling `super()` in constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-this-before-super"
          }
        },
        "name": "no-this-before-super",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of undeclared variables unless mentioned in `/*global */` comments",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-undef"
          }
        },
        "name": "no-undef",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unreachable"
          }
        },
        "name": "no-unreachable",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow negating the left operand of relational operators",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unsafe-negation"
          },
          "hasSuggestions": true,
          "fixable": null
        },
        "name": "no-unsafe-negation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `let` or `const` instead of `var`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-var"
          },
          "fixable": "code"
        },
        "name": "no-var",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require `const` declarations for variables that are never reassigned after declared",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-const"
          },
          "fixable": "code"
        },
        "name": "prefer-const",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require rest parameters instead of `arguments`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-rest-params"
          }
        },
        "name": "prefer-rest-params",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require spread operators instead of `.apply()`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-spread"
          },
          "fixable": null
        },
        "name": "prefer-spread",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `@ts-<directive>` comments or require descriptions after directives",
            "recommended": {
              "recommended": true,
              "strict": [
                {
                  "minimumDescriptionLength": 10
                }
              ]
            },
            "url": "https://typescript-eslint.io/rules/ban-ts-comment"
          },
          "hasSuggestions": true
        },
        "name": "ts/ban-ts-comment",
        "options": [
          {
            "ts-expect-error": "allow-with-description"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `Array` constructors",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-array-constructor"
          },
          "hasSuggestions": true
        },
        "name": "no-array-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow generic `Array` constructors",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-array-constructor"
          },
          "fixable": "code"
        },
        "name": "ts/no-array-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate enum member values",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-duplicate-enum-values"
          },
          "hasSuggestions": false
        },
        "name": "ts/no-duplicate-enum-values",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow using the `delete` operator on computed key expressions",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/no-dynamic-delete"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "ts/no-dynamic-delete",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow accidentally using the \"empty object\" type",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-empty-object-type"
          },
          "hasSuggestions": true
        },
        "name": "ts/no-empty-object-type",
        "options": [
          {
            "allowInterfaces": "always"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the `any` type",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-explicit-any"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "ts/no-explicit-any",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow extra non-null assertions",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-extra-non-null-assertion"
          },
          "fixable": "code"
        },
        "name": "ts/no-extra-non-null-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow classes used as namespaces",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/no-extraneous-class"
          }
        },
        "name": "ts/no-extraneous-class",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow `void` type outside of generic or return types",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/no-invalid-void-type"
          }
        },
        "name": "ts/no-invalid-void-type",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce valid definition of `new` and `constructor`",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-misused-new"
          }
        },
        "name": "ts/no-misused-new",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow TypeScript namespaces",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-namespace"
          }
        },
        "name": "ts/no-namespace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow non-null assertions in the left operand of a nullish coalescing operator",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing"
          },
          "hasSuggestions": true
        },
        "name": "ts/no-non-null-asserted-nullish-coalescing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow non-null assertions after an optional chain expression",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain"
          },
          "hasSuggestions": true
        },
        "name": "ts/no-non-null-asserted-optional-chain",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow non-null assertions using the `!` postfix operator",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/no-non-null-assertion"
          },
          "hasSuggestions": true
        },
        "name": "ts/no-non-null-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow invocation of `require()`",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-require-imports"
          }
        },
        "name": "ts/no-require-imports",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow aliasing `this`",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-this-alias"
          }
        },
        "name": "ts/no-this-alias",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow unnecessary constraints on generic types",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-unnecessary-type-constraint"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "ts/no-unnecessary-type-constraint",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unsafe declaration merging",
            "recommended": "recommended",
            "requiresTypeChecking": false,
            "url": "https://typescript-eslint.io/rules/no-unsafe-declaration-merging"
          }
        },
        "name": "ts/no-unsafe-declaration-merging",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow using the unsafe built-in Function type",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-unsafe-function-type"
          },
          "fixable": "code"
        },
        "name": "ts/no-unsafe-function-type",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unused expressions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unused-expressions"
          }
        },
        "name": "no-unused-expressions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unused expressions",
            "extendsBaseRule": true,
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-unused-expressions"
          }
        },
        "name": "ts/no-unused-expressions",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unused-vars"
          }
        },
        "name": "no-unused-vars",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-unused-vars"
          }
        },
        "name": "ts/no-unused-vars",
        "options": [
          {
            "argsIgnorePattern": "^_",
            "destructuredArrayIgnorePattern": "^_",
            "ignoreRestSiblings": true,
            "varsIgnorePattern": "^_"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unnecessary constructors",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-useless-constructor"
          }
        },
        "name": "no-useless-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unnecessary constructors",
            "recommended": "strict",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-useless-constructor"
          }
        },
        "name": "ts/no-useless-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow using confusing built-in primitive class wrappers",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-wrapper-object-types"
          },
          "fixable": "code"
        },
        "name": "ts/no-wrapper-object-types",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce the use of `as const` over literal type",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/prefer-as-const"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "ts/prefer-as-const",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require all enum members to be literal values",
            "recommended": "strict",
            "requiresTypeChecking": false,
            "url": "https://typescript-eslint.io/rules/prefer-literal-enum-member"
          }
        },
        "name": "ts/prefer-literal-enum-member",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/prefer-namespace-keyword"
          },
          "fixable": "code"
        },
        "name": "ts/prefer-namespace-keyword",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow certain triple slash directives in favor of ES6-style import declarations",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/triple-slash-reference"
          }
        },
        "name": "ts/triple-slash-reference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow two overloads that could be unified into one with a union or an optional/rest parameter",
            "recommended": "strict",
            "url": "https://typescript-eslint.io/rules/unified-signatures"
          },
          "type": "suggestion"
        },
        "name": "ts/unified-signatures",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow use of `this` in contexts where the value of `this` is `undefined`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-invalid-this"
          }
        },
        "name": "no-invalid-this",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow literal numbers that lose precision",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-loss-of-precision"
          }
        },
        "name": "no-loss-of-precision",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of variables before they are defined",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-use-before-define"
          }
        },
        "name": "no-use-before-define",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require consistently using either `T[]` or `Array<T>` for arrays",
            "recommended": "stylistic",
            "url": "https://typescript-eslint.io/rules/array-type"
          },
          "fixable": "code"
        },
        "name": "ts/array-type",
        "options": [
          {
            "default": "generic"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce type definitions to consistently use either `interface` or `type`",
            "recommended": "stylistic",
            "url": "https://typescript-eslint.io/rules/consistent-type-definitions"
          },
          "fixable": "code"
        },
        "name": "ts/consistent-type-definitions",
        "options": [
          "interface"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce consistent usage of type imports",
            "url": "https://typescript-eslint.io/rules/consistent-type-imports"
          },
          "fixable": "code"
        },
        "name": "ts/consistent-type-imports",
        "options": [
          {
            "disallowTypeAnnotations": false,
            "prefer": "type-imports"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "hasSuggestions": true,
          "type": "problem",
          "docs": {
            "description": "Require explicit accessibility modifiers on class properties and methods",
            "url": "https://typescript-eslint.io/rules/explicit-member-accessibility"
          },
          "fixable": "code"
        },
        "name": "ts/explicit-member-accessibility",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require explicit return and argument types on exported functions' and classes' public class methods",
            "url": "https://typescript-eslint.io/rules/explicit-module-boundary-types"
          }
        },
        "name": "ts/explicit-module-boundary-types",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce using a particular method signature syntax",
            "url": "https://typescript-eslint.io/rules/method-signature-style"
          },
          "fixable": "code"
        },
        "name": "ts/method-signature-style",
        "options": [
          "property"
        ]
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "Enforce naming conventions for everything across a codebase",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/naming-convention"
          },
          "type": "suggestion"
        },
        "name": "ts/naming-convention",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow duplicate class members",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-dupe-class-members"
          }
        },
        "name": "ts/no-dupe-class-members",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow empty functions",
            "recommended": "stylistic",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-empty-function"
          }
        },
        "name": "ts/no-empty-function",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the declaration of empty interfaces",
            "url": "https://typescript-eslint.io/rules/no-empty-interface"
          },
          "deprecated": true,
          "replacedBy": [
            "@typescript-eslint/no-empty-object-type"
          ],
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "ts/no-empty-interface",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers",
            "url": "https://typescript-eslint.io/rules/no-import-type-side-effects"
          },
          "fixable": "code"
        },
        "name": "ts/no-import-type-side-effects",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow `this` keywords outside of classes or class-like objects",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-invalid-this"
          }
        },
        "name": "ts/no-invalid-this",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "deprecated": true,
          "docs": {
            "description": "Disallow literal numbers that lose precision",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-loss-of-precision"
          }
        },
        "name": "ts/no-loss-of-precision",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow variable redeclaration",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-redeclare"
          }
        },
        "name": "ts/no-redeclare",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of variables before they are defined",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-use-before-define"
          }
        },
        "name": "ts/no-use-before-define",
        "options": [
          {
            "classes": false,
            "functions": false,
            "variables": true
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require or disallow parameter properties in class constructors",
            "url": "https://typescript-eslint.io/rules/parameter-properties"
          }
        },
        "name": "ts/parameter-properties",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "deprecated": true,
          "replacedBy": [
            "@typescript-eslint/ban-ts-comment"
          ],
          "docs": {
            "description": "Enforce using `@ts-expect-error` over `@ts-ignore`",
            "url": "https://typescript-eslint.io/rules/prefer-ts-expect-error"
          },
          "fixable": "code"
        },
        "name": "ts/prefer-ts-expect-error",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.?([cm])ts",
      "**/*.?([cm])tsx"
    ],
    "name": "vinicunca/typescript/rules-type-aware",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce dot notation whenever possible",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/dot-notation"
          },
          "fixable": "code"
        },
        "name": "dot-notation",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `eval()`-like methods",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-implied-eval"
          }
        },
        "name": "no-implied-eval",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow awaiting a value that is not a Thenable",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/await-thenable"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "ts/await-thenable",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce dot notation whenever possible",
            "recommended": "stylistic",
            "extendsBaseRule": true,
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/dot-notation"
          },
          "fixable": "code"
        },
        "name": "ts/dot-notation",
        "options": [
          {
            "allowKeywords": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Require Promise-like statements to be handled appropriately",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-floating-promises"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "ts/no-floating-promises",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow iterating over an array with a for-in loop",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-for-in-array"
          },
          "type": "problem"
        },
        "name": "ts/no-for-in-array",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow the use of `eval()`-like methods",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-implied-eval"
          },
          "type": "suggestion"
        },
        "name": "ts/no-implied-eval",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "Disallow Promises in places not designed to handle them",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-misused-promises"
          },
          "type": "problem"
        },
        "name": "ts/no-misused-promises",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Disallow type assertions that do not change the type of an expression",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unnecessary-type-assertion"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "ts/no-unnecessary-type-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow calling a function with a value with type `any`",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unsafe-argument"
          }
        },
        "name": "ts/no-unsafe-argument",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow assigning a value with type `any` to variables and properties",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unsafe-assignment"
          }
        },
        "name": "ts/no-unsafe-assignment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow calling a value with type `any`",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unsafe-call"
          }
        },
        "name": "ts/no-unsafe-call",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow member access on a value with type `any`",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unsafe-member-access"
          }
        },
        "name": "ts/no-unsafe-member-access",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow returning a value with type `any` from a function",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/no-unsafe-return"
          }
        },
        "name": "ts/no-unsafe-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "fixable": "code",
          "docs": {
            "description": "Require any function or method that returns a Promise to be marked async",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/promise-function-async"
          }
        },
        "name": "ts/promise-function-async",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require both operands of addition to be the same type and be `bigint`, `number`, or `string`",
            "recommended": {
              "recommended": true,
              "strict": [
                {
                  "allowAny": false,
                  "allowBoolean": false,
                  "allowNullish": false,
                  "allowNumberAndString": false,
                  "allowRegExp": false
                }
              ]
            },
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/restrict-plus-operands"
          }
        },
        "name": "ts/restrict-plus-operands",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce template literal expressions to be of `string` type",
            "recommended": {
              "recommended": true,
              "strict": [
                {
                  "allowAny": false,
                  "allowBoolean": false,
                  "allowNullish": false,
                  "allowNumber": false,
                  "allowRegExp": false,
                  "allowNever": false
                }
              ]
            },
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/restrict-template-expressions"
          }
        },
        "name": "ts/restrict-template-expressions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Enforce consistent awaiting of returned promises",
            "requiresTypeChecking": true,
            "extendsBaseRule": "no-return-await",
            "recommended": {
              "strict": [
                "error-handling-correctness-only"
              ]
            },
            "url": "https://typescript-eslint.io/rules/return-await"
          },
          "fixable": "code",
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "ts/return-await",
        "options": [
          "in-try-catch"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "fixable": "code",
          "hasSuggestions": true,
          "docs": {
            "description": "Disallow certain types in boolean expressions",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/strict-boolean-expressions"
          }
        },
        "name": "ts/strict-boolean-expressions",
        "options": [
          {
            "allowNullableBoolean": true,
            "allowNullableObject": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require switch-case statements to be exhaustive",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/switch-exhaustiveness-check"
          },
          "hasSuggestions": true
        },
        "name": "ts/switch-exhaustiveness-check",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "Enforce unbound methods are called with their expected scope",
            "recommended": "recommended",
            "requiresTypeChecking": true,
            "url": "https://typescript-eslint.io/rules/unbound-method"
          },
          "type": "problem"
        },
        "name": "ts/unbound-method",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.d.?([cm])ts"
    ],
    "name": "vinicunca/typescript/disables/dts",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "disallow `eslint-disable` comments without rule names",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html"
          },
          "fixable": null,
          "type": "suggestion"
        },
        "name": "eslint-comments/no-unlimited-disable",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "category": "Style guide",
            "description": "Forbid repeated import of the same module in multiple places.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-duplicates.md"
          },
          "fixable": "code"
        },
        "name": "import/no-duplicates",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow specified syntax",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-restricted-syntax"
          }
        },
        "name": "no-restricted-syntax",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-vars",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.{test,spec}.ts?(x)"
    ],
    "name": "vinicunca/typescript/disables/tests",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unused expressions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unused-expressions"
          }
        },
        "name": "no-unused-expressions",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.js",
      "**/*.cjs"
    ],
    "name": "vinicunca/typescript/disables/javascript",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow invocation of `require()`",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-require-imports"
          }
        },
        "name": "ts/no-require-imports",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [
            "@typescript-eslint/no-require-imports"
          ],
          "type": "problem",
          "docs": {
            "description": "Disallow `require` statements except in import statements",
            "url": "https://typescript-eslint.io/rules/no-var-requires"
          }
        },
        "name": "ts/no-var-requires",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/stylistic/rules",
    "plugins": [
      "antfu",
      "style"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside array brackets",
            "url": "https://eslint.style/rules/js/array-bracket-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/array-bracket-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require parentheses around arrow function arguments",
            "url": "https://eslint.style/rules/js/arrow-parens"
          },
          "fixable": "code"
        },
        "name": "style/arrow-parens",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after the arrow in arrow functions",
            "url": "https://eslint.style/rules/js/arrow-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/arrow-spacing",
        "options": [
          {
            "after": true,
            "before": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow or enforce spaces inside of blocks after opening block and before closing block",
            "url": "https://eslint.style/rules/ts/block-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/block-spacing",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent brace style for blocks",
            "url": "https://eslint.style/rules/ts/brace-style"
          },
          "fixable": "whitespace"
        },
        "name": "style/brace-style",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow trailing commas",
            "url": "https://eslint.style/rules/ts/comma-dangle"
          },
          "fixable": "code"
        },
        "name": "style/comma-dangle",
        "options": [
          "always-multiline"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after commas",
            "url": "https://eslint.style/rules/ts/comma-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/comma-spacing",
        "options": [
          {
            "after": true,
            "before": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent comma style",
            "url": "https://eslint.style/rules/js/comma-style"
          },
          "fixable": "code"
        },
        "name": "style/comma-style",
        "options": [
          "last"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside computed property brackets",
            "url": "https://eslint.style/rules/js/computed-property-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/computed-property-spacing",
        "options": [
          "never",
          {
            "enforceForClassMembers": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent newlines before and after dots",
            "url": "https://eslint.style/rules/js/dot-location"
          },
          "fixable": "code"
        },
        "name": "style/dot-location",
        "options": [
          "property"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow newline at the end of files",
            "url": "https://eslint.style/rules/js/eol-last"
          },
          "fixable": "whitespace"
        },
        "name": "style/eol-last",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent indentation",
            "url": "https://eslint.style/rules/ts/indent"
          },
          "fixable": "whitespace"
        },
        "name": "style/indent",
        "options": [
          2,
          {
            "ArrayExpression": 1,
            "CallExpression": {
              "arguments": 1
            },
            "flatTernaryExpressions": false,
            "FunctionDeclaration": {
              "body": 1,
              "parameters": 1
            },
            "FunctionExpression": {
              "body": 1,
              "parameters": 1
            },
            "ignoreComments": false,
            "ignoredNodes": [
              "TSUnionType",
              "TSIntersectionType",
              "TSTypeParameterInstantiation",
              "FunctionExpression > .params[decorators.length > 0]",
              "FunctionExpression > .params > :matches(Decorator, :not(:first-child))"
            ],
            "ImportDeclaration": 1,
            "MemberExpression": 1,
            "ObjectExpression": 1,
            "offsetTernaryExpressions": true,
            "outerIIFEBody": 1,
            "SwitchCase": 1,
            "VariableDeclarator": 1
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Indentation for binary operators",
            "url": "https://eslint.style/rules/plus/indent-binary-ops"
          },
          "fixable": "whitespace"
        },
        "name": "style/indent-binary-ops",
        "options": [
          2
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing between property names and type annotations in types and interfaces",
            "url": "https://eslint.style/rules/ts/key-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/key-spacing",
        "options": [
          {
            "afterColon": true,
            "beforeColon": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after keywords",
            "url": "https://eslint.style/rules/ts/keyword-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/keyword-spacing",
        "options": [
          {
            "after": true,
            "before": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow an empty line between class members",
            "url": "https://eslint.style/rules/ts/lines-between-class-members"
          },
          "fixable": "whitespace"
        },
        "name": "style/lines-between-class-members",
        "options": [
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce a maximum number of statements allowed per line",
            "url": "https://eslint.style/rules/js/max-statements-per-line"
          }
        },
        "name": "style/max-statements-per-line",
        "options": [
          {
            "max": 1
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require a specific member delimiter style for interfaces and type literals",
            "url": "https://eslint.style/rules/ts/member-delimiter-style"
          },
          "fixable": "whitespace"
        },
        "name": "style/member-delimiter-style",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce newlines between operands of ternary expressions",
            "url": "https://eslint.style/rules/js/multiline-ternary"
          },
          "fixable": "whitespace"
        },
        "name": "style/multiline-ternary",
        "options": [
          "always-multiline"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce or disallow parentheses when invoking a constructor with no arguments",
            "url": "https://eslint.style/rules/js/new-parens"
          },
          "fixable": "code"
        },
        "name": "style/new-parens",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow unnecessary parentheses",
            "url": "https://eslint.style/rules/ts/no-extra-parens"
          },
          "fixable": "code"
        },
        "name": "style/no-extra-parens",
        "options": [
          "functions"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow leading or trailing decimal points in numeric literals",
            "url": "https://eslint.style/rules/js/no-floating-decimal"
          },
          "fixable": "code"
        },
        "name": "style/no-floating-decimal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow mixed binary operators",
            "url": "https://eslint.style/rules/js/no-mixed-operators"
          }
        },
        "name": "style/no-mixed-operators",
        "options": [
          {
            "allowSamePrecedence": true,
            "groups": [
              [
                "==",
                "!=",
                "===",
                "!==",
                ">",
                ">=",
                "<",
                "<="
              ],
              [
                "&&",
                "||"
              ],
              [
                "in",
                "instanceof"
              ]
            ]
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow mixed spaces and tabs for indentation",
            "url": "https://eslint.style/rules/js/no-mixed-spaces-and-tabs"
          }
        },
        "name": "style/no-mixed-spaces-and-tabs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow multiple spaces",
            "url": "https://eslint.style/rules/js/no-multi-spaces"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-multi-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow multiple empty lines",
            "url": "https://eslint.style/rules/js/no-multiple-empty-lines"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-multiple-empty-lines",
        "options": [
          {
            "max": 1,
            "maxBOF": 0,
            "maxEOF": 0
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow all tabs",
            "url": "https://eslint.style/rules/js/no-tabs"
          }
        },
        "name": "style/no-tabs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow trailing whitespace at the end of lines",
            "url": "https://eslint.style/rules/js/no-trailing-spaces"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-trailing-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow whitespace before properties",
            "url": "https://eslint.style/rules/js/no-whitespace-before-property"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-whitespace-before-property",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside braces",
            "url": "https://eslint.style/rules/ts/object-curly-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/object-curly-spacing",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent linebreak style for operators",
            "url": "https://eslint.style/rules/js/operator-linebreak"
          },
          "fixable": "code"
        },
        "name": "style/operator-linebreak",
        "options": [
          "before"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow padding within blocks",
            "url": "https://eslint.style/rules/js/padded-blocks"
          },
          "fixable": "whitespace"
        },
        "name": "style/padded-blocks",
        "options": [
          {
            "blocks": "never",
            "classes": "never",
            "switches": "never"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require quotes around object literal, type literal, interfaces and enums property names",
            "url": "https://eslint.style/rules/ts/quote-props"
          },
          "fixable": "code"
        },
        "name": "style/quote-props",
        "options": [
          "consistent-as-needed"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce the consistent use of either backticks, double, or single quotes",
            "url": "https://eslint.style/rules/ts/quotes"
          },
          "fixable": "code"
        },
        "name": "style/quotes",
        "options": [
          "single"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce spacing between rest and spread operators and their expressions",
            "url": "https://eslint.style/rules/js/rest-spread-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/rest-spread-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow semicolons instead of ASI",
            "url": "https://eslint.style/rules/ts/semi"
          },
          "fixable": "code"
        },
        "name": "style/semi",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after semicolons",
            "url": "https://eslint.style/rules/js/semi-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/semi-spacing",
        "options": [
          {
            "after": true,
            "before": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before blocks",
            "url": "https://eslint.style/rules/ts/space-before-blocks"
          },
          "fixable": "whitespace"
        },
        "name": "style/space-before-blocks",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before function parenthesis",
            "url": "https://eslint.style/rules/ts/space-before-function-paren"
          },
          "fixable": "whitespace"
        },
        "name": "style/space-before-function-paren",
        "options": [
          {
            "anonymous": "always",
            "asyncArrow": "always",
            "named": "never"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside parentheses",
            "url": "https://eslint.style/rules/js/space-in-parens"
          },
          "fixable": "whitespace"
        },
        "name": "style/space-in-parens",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require spacing around infix operators",
            "url": "https://eslint.style/rules/ts/space-infix-ops"
          },
          "fixable": "whitespace"
        },
        "name": "style/space-infix-ops",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before or after unary operators",
            "url": "https://eslint.style/rules/js/space-unary-ops"
          },
          "fixable": "whitespace"
        },
        "name": "style/space-unary-ops",
        "options": [
          {
            "nonwords": false,
            "words": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing after the `//` or `/*` in a comment",
            "url": "https://eslint.style/rules/js/spaced-comment"
          },
          "fixable": "whitespace"
        },
        "name": "style/spaced-comment",
        "options": [
          "always",
          {
            "block": {
              "balanced": true,
              "exceptions": [
                "*"
              ],
              "markers": [
                "!"
              ]
            },
            "line": {
              "exceptions": [
                "/",
                "#"
              ],
              "markers": [
                "/"
              ]
            }
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow spacing around embedded expressions of template strings",
            "url": "https://eslint.style/rules/js/template-curly-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/template-curly-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow spacing between template tags and their literals",
            "url": "https://eslint.style/rules/js/template-tag-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/template-tag-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require consistent spacing around type annotations",
            "url": "https://eslint.style/rules/ts/type-annotation-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/type-annotation-spacing",
        "options": [
          {}
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforces consistent spacing inside TypeScript type generics",
            "url": "https://eslint.style/rules/plus/type-generic-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/type-generic-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Expect space before the type declaration in the named tuple",
            "url": "https://eslint.style/rules/plus/type-named-tuple-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/type-named-tuple-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require parentheses around immediate `function` invocations",
            "url": "https://eslint.style/rules/js/wrap-iife"
          },
          "fixable": "code"
        },
        "name": "style/wrap-iife",
        "options": [
          "any",
          {
            "functionPrototypeMethods": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow spacing around the `*` in `yield*` expressions",
            "url": "https://eslint.style/rules/js/yield-star-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/yield-star-spacing",
        "options": [
          "both"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce closing bracket location in JSX",
            "url": "https://eslint.style/rules/jsx/jsx-closing-bracket-location"
          },
          "fixable": "code"
        },
        "name": "style/jsx-closing-bracket-location",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce closing tag location for multiline JSX",
            "url": "https://eslint.style/rules/jsx/jsx-closing-tag-location"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-closing-tag-location",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes",
            "url": "https://eslint.style/rules/jsx/jsx-curly-brace-presence"
          },
          "fixable": "code"
        },
        "name": "style/jsx-curly-brace-presence",
        "options": [
          {
            "propElementValues": "always"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent linebreaks in curly braces in JSX attributes and expressions",
            "url": "https://eslint.style/rules/jsx/jsx-curly-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-curly-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
            "url": "https://eslint.style/rules/jsx/jsx-curly-spacing"
          },
          "fixable": "code"
        },
        "name": "style/jsx-curly-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce or disallow spaces around equal signs in JSX attributes",
            "url": "https://eslint.style/rules/jsx/jsx-equals-spacing"
          },
          "fixable": "code"
        },
        "name": "style/jsx-equals-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce proper position of the first property in JSX",
            "url": "https://eslint.style/rules/jsx/jsx-first-prop-new-line"
          },
          "fixable": "code"
        },
        "name": "style/jsx-first-prop-new-line",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce line breaks before and after JSX elements when they are used as arguments to a function.",
            "url": "https://eslint.style/rules/jsx/jsx-function-call-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-function-call-newline",
        "options": [
          "multiline"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce props indentation in JSX",
            "url": "https://eslint.style/rules/jsx/jsx-indent-props"
          },
          "fixable": "code"
        },
        "name": "style/jsx-indent-props",
        "options": [
          2
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce maximum of props on a single line in JSX",
            "url": "https://eslint.style/rules/jsx/jsx-max-props-per-line"
          },
          "fixable": "code"
        },
        "name": "style/jsx-max-props-per-line",
        "options": [
          {
            "maximum": 1,
            "when": "multiline"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require one JSX element per line",
            "url": "https://eslint.style/rules/jsx/jsx-one-expression-per-line"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-one-expression-per-line",
        "options": [
          {
            "allow": "single-child"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce the consistent use of either double or single quotes in JSX attributes",
            "url": "https://eslint.style/rules/js/jsx-quotes"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-quotes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce whitespace in and around the JSX opening and closing brackets",
            "url": "https://eslint.style/rules/jsx/jsx-tag-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-tag-spacing",
        "options": [
          {
            "afterOpening": "never",
            "beforeClosing": "never",
            "beforeSelfClosing": "always",
            "closingSlash": "never"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow missing parentheses around multiline JSX",
            "url": "https://eslint.style/rules/jsx/jsx-wrap-multilines"
          },
          "fixable": "code"
        },
        "name": "style/jsx-wrap-multilines",
        "options": [
          {
            "arrow": "parens-new-line",
            "assignment": "parens-new-line",
            "condition": "parens-new-line",
            "declaration": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line",
            "propertyValue": "parens-new-line",
            "return": "parens-new-line"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Having line breaks styles to object, array and named imports",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/consistent-list-newline.md"
          },
          "fixable": "whitespace"
        },
        "name": "antfu/consistent-list-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce top-level functions to be declared with function keyword",
            "url": "https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/top-level-function.md"
          },
          "fixable": "code"
        },
        "name": "antfu/top-level-function",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce consistent brace style for all control statements",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/curly"
          },
          "fixable": "code"
        },
        "name": "curly",
        "options": [
          "all"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce linebreaks after opening and before closing array brackets",
            "url": "https://eslint.style/rules/js/array-bracket-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/array-bracket-newline",
        "options": [
          "consistent"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce line breaks after each array element",
            "url": "https://eslint.style/rules/js/array-element-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/array-element-newline",
        "options": [
          "consistent"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow spacing between function identifiers and their invocations",
            "url": "https://eslint.style/rules/ts/function-call-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/func-call-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent line breaks after opening and before closing braces",
            "url": "https://eslint.style/rules/ts/object-curly-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/object-curly-newline",
        "options": [
          {
            "consistent": true,
            "multiline": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce placing object properties on separate lines",
            "url": "https://eslint.style/rules/ts/object-property-newline"
          },
          "fixable": "whitespace"
        },
        "name": "style/object-property-newline",
        "options": [
          {
            "allowMultiplePropertiesPerLine": true
          }
        ]
      }
    ]
  },
  {
    "name": "vinicunca/regexp/rules",
    "plugins": [
      "regexp"
    ],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow control characters in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-control-regex"
          }
        },
        "name": "no-control-regex",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow characters which are made with multiple code points in character class syntax",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-misleading-character-class"
          },
          "hasSuggestions": true
        },
        "name": "no-misleading-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow multiple spaces in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-regex-spaces"
          },
          "fixable": "code"
        },
        "name": "no-regex-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow use of the `RegExp` constructor in favor of regular expression literals",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/prefer-regex-literals"
          },
          "hasSuggestions": true
        },
        "name": "prefer-regex-literals",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow invalid regular expression strings in `RegExp` constructors",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-invalid-regexp"
          }
        },
        "name": "no-invalid-regexp",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow useless backreferences in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-useless-backreference"
          }
        },
        "name": "no-useless-backreference",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow empty character classes in regular expressions",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-empty-character-class"
          }
        },
        "name": "no-empty-character-class",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow confusing quantifiers",
            "category": "Best Practices",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html",
            "ruleId": "regexp/confusing-quantifier",
            "ruleName": "confusing-quantifier"
          },
          "type": "problem"
        },
        "name": "regexp/confusing-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent escaping of control characters",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html",
            "ruleId": "regexp/control-character-escape",
            "ruleName": "control-character-escape"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/control-character-escape",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce match any character style",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html",
            "ruleId": "regexp/match-any",
            "ruleName": "match-any"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/match-any",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce use of escapes on negation",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html",
            "ruleId": "regexp/negation",
            "ruleName": "negation"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/negation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow elements that contradict assertions",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html",
            "ruleId": "regexp/no-contradiction-with-assertion",
            "ruleName": "no-contradiction-with-assertion"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-contradiction-with-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow duplicate characters in the RegExp character class",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html",
            "ruleId": "regexp/no-dupe-characters-character-class",
            "ruleName": "no-dupe-characters-character-class"
          },
          "fixable": "code"
        },
        "name": "regexp/no-dupe-characters-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate disjunctions",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html",
            "ruleId": "regexp/no-dupe-disjunctions",
            "ruleName": "no-dupe-disjunctions"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "regexp/no-dupe-disjunctions",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow alternatives without elements",
            "category": "Possible Errors",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html",
            "ruleId": "regexp/no-empty-alternative",
            "ruleName": "no-empty-alternative"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-empty-alternative",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow capturing group that captures empty.",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html",
            "ruleId": "regexp/no-empty-capturing-group",
            "ruleName": "no-empty-capturing-group"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-empty-capturing-group",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow character classes that match no characters",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html",
            "ruleId": "regexp/no-empty-character-class",
            "ruleName": "no-empty-character-class"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-empty-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow empty group",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html",
            "ruleId": "regexp/no-empty-group",
            "ruleName": "no-empty-group"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-empty-group",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow empty lookahead assertion or empty lookbehind assertion",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html",
            "ruleId": "regexp/no-empty-lookarounds-assertion",
            "ruleName": "no-empty-lookarounds-assertion"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-empty-lookarounds-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow empty string literals in character classes",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html",
            "ruleId": "regexp/no-empty-string-literal",
            "ruleName": "no-empty-string-literal"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-empty-string-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow escape backspace (`[\\b]`)",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html",
            "ruleId": "regexp/no-escape-backspace",
            "ruleName": "no-escape-backspace"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "regexp/no-escape-backspace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary nested lookaround assertions",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html",
            "ruleId": "regexp/no-extra-lookaround-assertions",
            "ruleName": "no-extra-lookaround-assertions"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-extra-lookaround-assertions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow invalid regular expression strings in `RegExp` constructors",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html",
            "ruleId": "regexp/no-invalid-regexp",
            "ruleName": "no-invalid-regexp"
          },
          "type": "problem"
        },
        "name": "regexp/no-invalid-regexp",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow invisible raw character",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html",
            "ruleId": "regexp/no-invisible-character",
            "ruleName": "no-invisible-character"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-invisible-character",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow lazy quantifiers at the end of an expression",
            "category": "Possible Errors",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html",
            "ruleId": "regexp/no-lazy-ends",
            "ruleName": "no-lazy-ends"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-lazy-ends",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow legacy RegExp features",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html",
            "ruleId": "regexp/no-legacy-features",
            "ruleName": "no-legacy-features"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-legacy-features",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow capturing groups that do not behave as one would expect",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html",
            "ruleId": "regexp/no-misleading-capturing-group",
            "ruleName": "no-misleading-capturing-group"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-misleading-capturing-group",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow multi-code-point characters in character classes and quantifiers",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html",
            "ruleId": "regexp/no-misleading-unicode-character",
            "ruleName": "no-misleading-unicode-character"
          },
          "fixable": "code",
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-misleading-unicode-character",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html",
            "ruleId": "regexp/no-missing-g-flag",
            "ruleName": "no-missing-g-flag"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "regexp/no-missing-g-flag",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow non-standard flags",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html",
            "ruleId": "regexp/no-non-standard-flag",
            "ruleName": "no-non-standard-flag"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-non-standard-flag",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow obscure character ranges",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html",
            "ruleId": "regexp/no-obscure-range",
            "ruleName": "no-obscure-range"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-obscure-range",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow optional assertions",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html",
            "ruleId": "regexp/no-optional-assertion",
            "ruleName": "no-optional-assertion"
          },
          "type": "problem"
        },
        "name": "regexp/no-optional-assertion",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow backreferences that reference a group that might not be matched",
            "category": "Possible Errors",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html",
            "ruleId": "regexp/no-potentially-useless-backreference",
            "ruleName": "no-potentially-useless-backreference"
          },
          "type": "problem"
        },
        "name": "regexp/no-potentially-useless-backreference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow exponential and polynomial backtracking",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html",
            "ruleId": "regexp/no-super-linear-backtracking",
            "ruleName": "no-super-linear-backtracking"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "regexp/no-super-linear-backtracking",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow trivially nested assertions",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html",
            "ruleId": "regexp/no-trivially-nested-assertion",
            "ruleName": "no-trivially-nested-assertion"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-trivially-nested-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow nested quantifiers that can be rewritten as one quantifier",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html",
            "ruleId": "regexp/no-trivially-nested-quantifier",
            "ruleName": "no-trivially-nested-quantifier"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-trivially-nested-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unused capturing group",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html",
            "ruleId": "regexp/no-unused-capturing-group",
            "ruleName": "no-unused-capturing-group"
          },
          "fixable": "code",
          "type": "suggestion",
          "hasSuggestions": true
        },
        "name": "regexp/no-unused-capturing-group",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow assertions that are known to always accept (or reject)",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html",
            "ruleId": "regexp/no-useless-assertions",
            "ruleName": "no-useless-assertions"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/no-useless-assertions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow useless backreferences in regular expressions",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html",
            "ruleId": "regexp/no-useless-backreference",
            "ruleName": "no-useless-backreference"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-useless-backreference",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow character class with one character",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html",
            "ruleId": "regexp/no-useless-character-class",
            "ruleName": "no-useless-character-class"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow useless `$` replacements in replacement string",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html",
            "ruleId": "regexp/no-useless-dollar-replacements",
            "ruleName": "no-useless-dollar-replacements"
          },
          "type": "suggestion"
        },
        "name": "regexp/no-useless-dollar-replacements",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary escape characters in RegExp",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html",
            "ruleId": "regexp/no-useless-escape",
            "ruleName": "no-useless-escape"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-escape",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow unnecessary regex flags",
            "category": "Best Practices",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html",
            "ruleId": "regexp/no-useless-flag",
            "ruleName": "no-useless-flag"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-flag",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessarily non-greedy quantifiers",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html",
            "ruleId": "regexp/no-useless-lazy",
            "ruleName": "no-useless-lazy"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-lazy",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary non-capturing group",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html",
            "ruleId": "regexp/no-useless-non-capturing-group",
            "ruleName": "no-useless-non-capturing-group"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-non-capturing-group",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow quantifiers that can be removed",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html",
            "ruleId": "regexp/no-useless-quantifier",
            "ruleName": "no-useless-quantifier"
          },
          "fixable": "code",
          "type": "suggestion",
          "hasSuggestions": true
        },
        "name": "regexp/no-useless-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary character ranges",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html",
            "ruleId": "regexp/no-useless-range",
            "ruleName": "no-useless-range"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-range",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary elements in expression character classes",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html",
            "ruleId": "regexp/no-useless-set-operand",
            "ruleName": "no-useless-set-operand"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-set-operand",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow string disjunction of single characters in `\\q{...}`",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html",
            "ruleId": "regexp/no-useless-string-literal",
            "ruleName": "no-useless-string-literal"
          },
          "type": "suggestion",
          "fixable": "code"
        },
        "name": "regexp/no-useless-string-literal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary `{n,m}` quantifier",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html",
            "ruleId": "regexp/no-useless-two-nums-quantifier",
            "ruleName": "no-useless-two-nums-quantifier"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/no-useless-two-nums-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow quantifiers with a maximum of zero",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html",
            "ruleId": "regexp/no-zero-quantifier",
            "ruleName": "no-zero-quantifier"
          },
          "type": "suggestion",
          "hasSuggestions": true
        },
        "name": "regexp/no-zero-quantifier",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow the alternatives of lookarounds that end with a non-constant quantifier",
            "category": "Best Practices",
            "recommended": true,
            "default": "warn",
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html",
            "ruleId": "regexp/optimal-lookaround-quantifier",
            "ruleName": "optimal-lookaround-quantifier"
          },
          "hasSuggestions": true,
          "type": "problem"
        },
        "name": "regexp/optimal-lookaround-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require optimal quantifiers for concatenated quantifiers",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html",
            "ruleId": "regexp/optimal-quantifier-concatenation",
            "ruleName": "optimal-quantifier-concatenation"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/optimal-quantifier-concatenation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using character class",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html",
            "ruleId": "regexp/prefer-character-class",
            "ruleName": "prefer-character-class"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-character-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using `\\d`",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html",
            "ruleId": "regexp/prefer-d",
            "ruleName": "prefer-d"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-d",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using `+` quantifier",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html",
            "ruleId": "regexp/prefer-plus-quantifier",
            "ruleName": "prefer-plus-quantifier"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-plus-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "prefer predefined assertion over equivalent lookarounds",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html",
            "ruleId": "regexp/prefer-predefined-assertion",
            "ruleName": "prefer-predefined-assertion"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-predefined-assertion",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using `?` quantifier",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html",
            "ruleId": "regexp/prefer-question-quantifier",
            "ruleName": "prefer-question-quantifier"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-question-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using character class range",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html",
            "ruleId": "regexp/prefer-range",
            "ruleName": "prefer-range"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-range",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "prefer character class set operations instead of lookarounds",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html",
            "ruleId": "regexp/prefer-set-operation",
            "ruleName": "prefer-set-operation"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-set-operation",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using `*` quantifier",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html",
            "ruleId": "regexp/prefer-star-quantifier",
            "ruleName": "prefer-star-quantifier"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-star-quantifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce use of unicode codepoint escapes",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html",
            "ruleId": "regexp/prefer-unicode-codepoint-escapes",
            "ruleName": "prefer-unicode-codepoint-escapes"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-unicode-codepoint-escapes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce using `\\w`",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html",
            "ruleId": "regexp/prefer-w",
            "ruleName": "prefer-w"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/prefer-w",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require simplify set operations",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html",
            "ruleId": "regexp/simplify-set-operations",
            "ruleName": "simplify-set-operations"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/simplify-set-operations",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require regex flags to be sorted",
            "category": "Stylistic Issues",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html",
            "ruleId": "regexp/sort-flags",
            "ruleName": "sort-flags"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/sort-flags",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow not strictly valid regular expressions",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html",
            "ruleId": "regexp/strict",
            "ruleName": "strict"
          },
          "fixable": "code",
          "type": "suggestion",
          "hasSuggestions": true
        },
        "name": "regexp/strict",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "use the `i` flag if it simplifies the pattern",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html",
            "ruleId": "regexp/use-ignore-case",
            "ruleName": "use-ignore-case"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "regexp/use-ignore-case",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/test/setup",
    "plugins": [
      "test"
    ],
    "rules": []
  },
  {
    "files": [
      "**/__tests__/**/*.?([cm])[jt]s?(x)",
      "**/*.spec.?([cm])[jt]s?(x)",
      "**/*.test.?([cm])[jt]s?(x)",
      "**/*.bench.?([cm])[jt]s?(x)",
      "**/*.benchmark.?([cm])[jt]s?(x)"
    ],
    "name": "vinicunca/test/rules",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "enforce either `process` or `require(\"process\")`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md"
          },
          "type": "suggestion",
          "fixable": null
        },
        "name": "node/prefer-global/process",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "fixable": "code",
          "docs": {
            "description": "enforce using test or it but not both",
            "recommended": false,
            "url": "https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md"
          }
        },
        "name": "test/consistent-test-it",
        "options": [
          {
            "fn": "it",
            "withinDescribe": "it"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow identical titles",
            "recommended": false,
            "url": "https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md"
          },
          "fixable": "code"
        },
        "name": "test/no-identical-title",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow .only blocks in tests",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://github.com/levibuzolic/eslint-plugin-no-only-tests"
          },
          "fixable": "code"
        },
        "name": "test/no-only-tests",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce having hooks in consistent order",
            "recommended": false,
            "url": "https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md"
          }
        },
        "name": "test/prefer-hooks-in-order",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce lowercase titles",
            "recommended": false,
            "url": "https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md"
          },
          "fixable": "code"
        },
        "name": "test/prefer-lowercase-title",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/vue/setup",
    "plugins": [
      "vue"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.vue"
    ],
    "name": "vinicunca/vue/rules",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "support comment-directives in `<template>`",
            "categories": [
              "base"
            ],
            "url": "https://eslint.vuejs.org/rules/comment-directive.html"
          }
        },
        "name": "vue/comment-directive",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "prevent variables used in JSX to be marked as unused",
            "categories": [
              "base"
            ],
            "url": "https://eslint.vuejs.org/rules/jsx-uses-vars.html"
          }
        },
        "name": "vue/jsx-uses-vars",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require component names to be always multi-word",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/multi-word-component-names.html"
          }
        },
        "name": "vue/multi-word-component-names",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using arrow functions to define watcher",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html"
          },
          "fixable": null
        },
        "name": "vue/no-arrow-functions-in-watch",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow asynchronous actions in computed properties",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-async-in-computed-properties.html"
          },
          "fixable": null
        },
        "name": "vue/no-async-in-computed-properties",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-child-content.html"
          },
          "fixable": null,
          "hasSuggestions": true
        },
        "name": "vue/no-child-content",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow accessing computed properties in `data`.",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-computed-properties-in-data.html"
          },
          "fixable": null
        },
        "name": "vue/no-computed-properties-in-data",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated object declaration on data (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-data-object-declaration",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-destroyed-lifecycle",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `$listeners` (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-dollar-listeners-api",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-dollar-scopedslots-api",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated events api (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-events-api.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-events-api",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated filters syntax (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-filter.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-filter",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated the `functional` template (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-functional-template.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-functional-template",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-html-element-is",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-inline-template.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-inline-template",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-props-default-this",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-router-link-tag-prop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow deprecated `scope` attribute (in Vue.js 2.5.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-scope-attribute",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow deprecated `slot` attribute (in Vue.js 2.6.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-slot-attribute",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-slot-scope-attribute",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-v-bind-sync",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow deprecated `v-is` directive (in Vue.js 3.1.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-v-is.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-v-is",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-v-on-native-modifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-deprecated-v-on-number-modifiers",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html"
          },
          "fixable": null
        },
        "name": "vue/no-deprecated-vue-config-keycodes",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow duplication of field names",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-dupe-keys.html"
          },
          "fixable": null
        },
        "name": "vue/no-dupe-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow duplicate conditions in `v-if` / `v-else-if` chains",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-dupe-v-else-if.html"
          },
          "fixable": null
        },
        "name": "vue/no-dupe-v-else-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow duplication of attributes",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-duplicate-attributes.html"
          },
          "fixable": null
        },
        "name": "vue/no-duplicate-attributes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow `export` in `<script setup>`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-export-in-script-setup.html"
          },
          "fixable": null
        },
        "name": "vue/no-export-in-script-setup",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow asynchronously registered `expose`",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-expose-after-await.html"
          },
          "fixable": null
        },
        "name": "vue/no-expose-after-await",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow asynchronously registered lifecycle hooks",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-lifecycle-after-await.html"
          },
          "fixable": null
        },
        "name": "vue/no-lifecycle-after-await",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow mutation of component props",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-mutating-props.html"
          },
          "fixable": null
        },
        "name": "vue/no-mutating-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow parsing errors in `<template>`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-parsing-error.html"
          },
          "fixable": null
        },
        "name": "vue/no-parsing-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow use of value wrapped by `ref()` (Composition API) as an operand",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-ref-as-operand.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-ref-as-operand",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow the use of reserved names in component definitions",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-reserved-component-names.html"
          },
          "fixable": null
        },
        "name": "vue/no-reserved-component-names",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow overwriting reserved keys",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-reserved-keys.html"
          },
          "fixable": null
        },
        "name": "vue/no-reserved-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow reserved names in props",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-reserved-props.html",
            "defaultOptions": {
              "vue2": [
                {
                  "vueVersion": 2
                }
              ]
            }
          },
          "fixable": null
        },
        "name": "vue/no-reserved-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce component's data property to be a function",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-shared-component-data.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-shared-component-data",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow side effects in computed properties",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html"
          },
          "fixable": null
        },
        "name": "vue/no-side-effects-in-computed-properties",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow `key` attribute on `<template>`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-template-key.html"
          },
          "fixable": null
        },
        "name": "vue/no-template-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow mustaches in `<textarea>`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-textarea-mustache.html"
          },
          "fixable": null
        },
        "name": "vue/no-textarea-mustache",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow registering components that are not used inside templates",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-unused-components.html"
          },
          "fixable": null
        },
        "name": "vue/no-unused-components",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow unused variable definitions of v-for directives or scope attributes",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-unused-vars.html"
          },
          "fixable": null,
          "hasSuggestions": true
        },
        "name": "vue/no-unused-vars",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow use computed property like method",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html"
          },
          "fixable": null
        },
        "name": "vue/no-use-computed-property-like-method",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow using `v-if` on the same element as `v-for`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html"
          },
          "fixable": null
        },
        "name": "vue/no-use-v-if-with-v-for",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow useless attribute on `<template>`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-useless-template-attributes.html"
          },
          "fixable": null
        },
        "name": "vue/no-useless-template-attributes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow key of `<template v-for>` placed on child elements",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html"
          },
          "fixable": null
        },
        "name": "vue/no-v-for-template-key-on-child",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow v-text / v-html on component",
            "categories": [
              "vue2-essential",
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html"
          },
          "fixable": null
        },
        "name": "vue/no-v-text-v-html-on-component",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow asynchronously registered `watch`",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/no-watch-after-await.html"
          },
          "fixable": null
        },
        "name": "vue/no-watch-after-await",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce import from 'vue' instead of import from '@vue/*'",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/prefer-import-from-vue.html"
          },
          "fixable": "code"
        },
        "name": "vue/prefer-import-from-vue",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require `v-bind:is` of `<component>` elements",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-component-is.html"
          },
          "fixable": null
        },
        "name": "vue/require-component-is",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require prop type to be a constructor",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-prop-type-constructor.html"
          },
          "fixable": "code"
        },
        "name": "vue/require-prop-type-constructor",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce render function to always return value",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-render-return.html"
          },
          "fixable": null
        },
        "name": "vue/require-render-return",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce properties of `$slots` to be used as a function",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-slots-as-functions.html"
          },
          "fixable": null
        },
        "name": "vue/require-slots-as-functions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require control the display of the content inside `<transition>`",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-toggle-inside-transition.html"
          },
          "fixable": null
        },
        "name": "vue/require-toggle-inside-transition",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require `v-bind:key` with `v-for` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-v-for-key.html"
          },
          "fixable": null
        },
        "name": "vue/require-v-for-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce props default values to be valid",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/require-valid-default-prop.html"
          },
          "fixable": null
        },
        "name": "vue/require-valid-default-prop",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce that a return statement is present in computed property",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/return-in-computed-property.html"
          },
          "fixable": null
        },
        "name": "vue/return-in-computed-property",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce that a return statement is present in emits validator",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/return-in-emits-validator.html"
          },
          "fixable": null
        },
        "name": "vue/return-in-emits-validator",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce usage of `exact` modifier on `v-on`",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/use-v-on-exact.html"
          },
          "fixable": null
        },
        "name": "vue/use-v-on-exact",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require valid attribute names",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-attribute-name.html"
          },
          "fixable": null
        },
        "name": "vue/valid-attribute-name",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `defineEmits` compiler macro",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-define-emits.html"
          },
          "fixable": null
        },
        "name": "vue/valid-define-emits",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `defineProps` compiler macro",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-define-props.html"
          },
          "fixable": null
        },
        "name": "vue/valid-define-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `nextTick` function calls",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-next-tick.html"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "vue/valid-next-tick",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid template root",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-template-root.html"
          },
          "fixable": null
        },
        "name": "vue/valid-template-root",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-bind` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-bind.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-bind",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-cloak` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-cloak.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-cloak",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-else-if` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-else-if.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-else-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-else` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-else.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-else",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-for` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-for.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-for",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-html` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-html.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-html",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-if` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-if.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-if",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-is` directives",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-is.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-is",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-memo` directives",
            "categories": [
              "vue3-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-memo.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-memo",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-model` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-model.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-model",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-on` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-on.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-on",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-once` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-once.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-once",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-pre` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-pre.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-pre",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-show` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-show.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-show",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-slot` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-slot.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-slot",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce valid `v-text` directives",
            "categories": [
              "vue3-essential",
              "vue2-essential"
            ],
            "url": "https://eslint.vuejs.org/rules/valid-v-text.html"
          },
          "fixable": null
        },
        "name": "vue/valid-v-text",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce attribute naming style on custom components in template",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/attribute-hyphenation.html"
          },
          "fixable": "code"
        },
        "name": "vue/attribute-hyphenation",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce specific casing for component definition name",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/component-definition-name-casing.html"
          },
          "fixable": "code"
        },
        "name": "vue/component-definition-name-casing",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce the location of first attribute",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/first-attribute-linebreak.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/first-attribute-linebreak",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "require or disallow a line break before tag's closing brackets",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-closing-bracket-newline.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/html-closing-bracket-newline",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "require or disallow a space before tag's closing brackets",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/html-closing-bracket-spacing",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce end tag style",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-end-tags.html"
          },
          "fixable": "code"
        },
        "name": "vue/html-end-tags",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce consistent indentation in `<template>`",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-indent.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/html-indent",
        "options": [
          2
        ]
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce quotes style of HTML attributes",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-quotes.html"
          },
          "fixable": "code"
        },
        "name": "vue/html-quotes",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce self-closing style",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/html-self-closing.html"
          },
          "fixable": "code"
        },
        "name": "vue/html-self-closing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce the maximum number of attributes per line",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/max-attributes-per-line.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/max-attributes-per-line",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "require a line break before and after the contents of a multiline element",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/multiline-html-element-content-newline",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce unified spacing in mustache interpolations",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/mustache-interpolation-spacing",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "disallow multiple spaces",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-multi-spaces.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/no-multi-spaces",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "disallow spaces around equal signs in attribute",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/no-spaces-around-equal-signs-in-attribute",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow variable declarations from shadowing variables declared in the outer scope",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-template-shadow.html"
          },
          "fixable": null
        },
        "name": "vue/no-template-shadow",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce that each component should be in its own file",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/one-component-per-file.html"
          },
          "fixable": null
        },
        "name": "vue/one-component-per-file",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce specific casing for the Prop name in Vue components",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/prop-name-casing.html"
          },
          "fixable": null
        },
        "name": "vue/prop-name-casing",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require default value for props",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/require-default-prop.html"
          },
          "fixable": null
        },
        "name": "vue/require-default-prop",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require `emits` option with name triggered by `$emit()`",
            "categories": [
              "vue3-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/require-explicit-emits.html"
          },
          "fixable": null,
          "hasSuggestions": true
        },
        "name": "vue/require-explicit-emits",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require type definitions in props",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/require-prop-types.html"
          },
          "fixable": null
        },
        "name": "vue/require-prop-types",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "require a line break before and after the contents of a singleline element",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/singleline-html-element-content-newline",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce `v-bind` directive style",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/v-bind-style.html"
          },
          "fixable": "code"
        },
        "name": "vue/v-bind-style",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce v-on event naming style on custom components in template",
            "categories": [
              "vue3-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/v-on-event-hyphenation.html",
            "defaultOptions": {
              "vue3": [
                "always",
                {
                  "autofix": true
                }
              ]
            }
          },
          "fixable": "code"
        },
        "name": "vue/v-on-event-hyphenation",
        "options": [
          "always",
          {
            "autofix": true
          }
        ]
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce `v-on` directive style",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/v-on-style.html"
          },
          "fixable": "code"
        },
        "name": "vue/v-on-style",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce `v-slot` directive style",
            "categories": [
              "vue3-strongly-recommended",
              "vue2-strongly-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/v-slot-style.html"
          },
          "fixable": "code"
        },
        "name": "vue/v-slot-style",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce order of attributes",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/attributes-order.html"
          },
          "fixable": "code"
        },
        "name": "vue/attributes-order",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce order of component top-level elements",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/component-tags-order.html"
          },
          "fixable": "code",
          "deprecated": true,
          "replacedBy": [
            "block-order"
          ]
        },
        "name": "vue/component-tags-order",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow unnecessary `<template>`",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-lone-template.html"
          },
          "fixable": null
        },
        "name": "vue/no-lone-template",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow to pass multiple arguments to scoped slots",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-multiple-slot-args.html"
          },
          "fixable": null
        },
        "name": "vue/no-multiple-slot-args",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow use of v-html to prevent XSS attack",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/no-v-html.html"
          },
          "fixable": null
        },
        "name": "vue/no-v-html",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce order of properties in components",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/order-in-components.html"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "vue/order-in-components",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow usage of `this` in template",
            "categories": [
              "vue3-recommended",
              "vue2-recommended"
            ],
            "url": "https://eslint.vuejs.org/rules/this-in-template.html"
          },
          "fixable": "code"
        },
        "name": "vue/this-in-template",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "enforce either `process` or `require(\"process\")`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md"
          },
          "type": "suggestion",
          "fixable": null
        },
        "name": "node/prefer-global/process",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce order of component top-level elements",
            "url": "https://eslint.vuejs.org/rules/block-order.html"
          },
          "fixable": "code"
        },
        "name": "vue/block-order",
        "options": [
          {
            "order": [
              "script",
              "template",
              "style"
            ]
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce specific casing for the component naming style in template",
            "url": "https://eslint.vuejs.org/rules/component-name-in-template-casing.html"
          },
          "fixable": "code"
        },
        "name": "vue/component-name-in-template-casing",
        "options": [
          "PascalCase"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce the casing of component name in `components` options",
            "url": "https://eslint.vuejs.org/rules/component-options-name-casing.html"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "vue/component-options-name-casing",
        "options": [
          "PascalCase"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "enforce specific casing for custom event name",
            "url": "https://eslint.vuejs.org/rules/custom-event-name-casing.html"
          },
          "fixable": null
        },
        "name": "vue/custom-event-name-casing",
        "options": [
          "camelCase"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce order of `defineEmits` and `defineProps` compiler macros",
            "url": "https://eslint.vuejs.org/rules/define-macros-order.html"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "vue/define-macros-order",
        "options": [
          {
            "order": [
              "defineOptions",
              "defineProps",
              "defineEmits",
              "defineSlots"
            ]
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent newlines before and after dots in `<template>`",
            "url": "https://eslint.vuejs.org/rules/dot-location.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/dot-location",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/dot-location",
        "options": [
          "property"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce dot notation whenever possible in `<template>`",
            "recommended": false,
            "url": "https://eslint.vuejs.org/rules/dot-notation.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/dot-notation",
              "name": "ESLint core"
            }
          },
          "fixable": "code"
        },
        "name": "vue/dot-notation",
        "options": [
          {
            "allowKeywords": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require the use of `===` and `!==` in `<template>`",
            "recommended": false,
            "url": "https://eslint.vuejs.org/rules/eqeqeq.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/eqeqeq",
              "name": "ESLint core"
            }
          },
          "fixable": "code"
        },
        "name": "vue/eqeqeq",
        "options": [
          "smart"
        ]
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow constant expressions in conditions in `<template>`",
            "recommended": true,
            "url": "https://eslint.vuejs.org/rules/no-constant-condition.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/no-constant-condition",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-constant-condition",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow empty destructuring patterns in `<template>`",
            "recommended": true,
            "url": "https://eslint.vuejs.org/rules/no-empty-pattern.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/no-empty-pattern",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-empty-pattern",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow unnecessary parentheses in `<template>`",
            "url": "https://eslint.vuejs.org/rules/no-extra-parens.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/no-extra-parens",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/no-extra-parens",
        "options": [
          "functions"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow irregular whitespace in `.vue` files",
            "url": "https://eslint.vuejs.org/rules/no-irregular-whitespace.html",
            "extensionSource": {
              "url": "https://eslint.org/docs/rules/no-irregular-whitespace",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-irregular-whitespace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow literal numbers that lose precision in `<template>`",
            "recommended": true,
            "url": "https://eslint.vuejs.org/rules/no-loss-of-precision.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/no-loss-of-precision",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-loss-of-precision",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow specified syntax in `<template>`",
            "recommended": false,
            "url": "https://eslint.vuejs.org/rules/no-restricted-syntax.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/no-restricted-syntax",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-restricted-syntax",
        "options": [
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow specific argument in `v-bind`",
            "url": "https://eslint.vuejs.org/rules/no-restricted-v-bind.html"
          },
          "fixable": null
        },
        "name": "vue/no-restricted-v-bind",
        "options": [
          "/^v-/"
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow usages that lose the reactivity of `props` passed to `setup`",
            "url": "https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html"
          },
          "fixable": null
        },
        "name": "vue/no-setup-props-reactivity-loss",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow sparse arrays in `<template>`",
            "recommended": true,
            "url": "https://eslint.vuejs.org/rules/no-sparse-arrays.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/no-sparse-arrays",
              "name": "ESLint core"
            }
          }
        },
        "name": "vue/no-sparse-arrays",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow unused refs",
            "url": "https://eslint.vuejs.org/rules/no-unused-refs.html"
          },
          "fixable": null
        },
        "name": "vue/no-unused-refs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "disallow unnecessary `v-bind` directives",
            "url": "https://eslint.vuejs.org/rules/no-useless-v-bind.html"
          },
          "fixable": "code"
        },
        "name": "vue/no-useless-v-bind",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require or disallow method and property shorthand syntax for object literals in `<template>`",
            "recommended": false,
            "url": "https://eslint.vuejs.org/rules/object-shorthand.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/object-shorthand",
              "name": "ESLint core"
            }
          },
          "fixable": "code"
        },
        "name": "vue/object-shorthand",
        "options": [
          "always",
          {
            "avoidQuotes": true,
            "ignoreConstructors": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "require static class names in template to be in a separate `class` attribute",
            "url": "https://eslint.vuejs.org/rules/prefer-separate-static-class.html"
          },
          "fixable": "code"
        },
        "name": "vue/prefer-separate-static-class",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Require template literals instead of string concatenation in `<template>`",
            "recommended": false,
            "url": "https://eslint.vuejs.org/rules/prefer-template.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.org/docs/latest/rules/prefer-template",
              "name": "ESLint core"
            }
          },
          "fixable": "code"
        },
        "name": "vue/prefer-template",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require spacing around infix operators in `<template>`",
            "url": "https://eslint.vuejs.org/rules/space-infix-ops.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/space-infix-ops",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/space-infix-ops",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before or after unary operators in `<template>`",
            "url": "https://eslint.vuejs.org/rules/space-unary-ops.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/space-unary-ops",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/space-unary-ops",
        "options": [
          {
            "nonwords": false,
            "words": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside array brackets in `<template>`",
            "url": "https://eslint.vuejs.org/rules/array-bracket-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/array-bracket-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/array-bracket-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after the arrow in arrow functions in `<template>`",
            "url": "https://eslint.vuejs.org/rules/arrow-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/arrow-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/arrow-spacing",
        "options": [
          {
            "after": true,
            "before": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`",
            "url": "https://eslint.vuejs.org/rules/block-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/block-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/block-spacing",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce line breaks after opening and before closing block-level tags",
            "url": "https://eslint.vuejs.org/rules/block-tag-newline.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/block-tag-newline",
        "options": [
          {
            "multiline": "always",
            "singleline": "always"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent brace style for blocks in `<template>`",
            "url": "https://eslint.vuejs.org/rules/brace-style.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/brace-style",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/brace-style",
        "options": [
          "stroustrup",
          {
            "allowSingleLine": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow trailing commas in `<template>`",
            "url": "https://eslint.vuejs.org/rules/comma-dangle.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/comma-dangle",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/comma-dangle",
        "options": [
          "always-multiline"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after commas in `<template>`",
            "url": "https://eslint.vuejs.org/rules/comma-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/comma-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/comma-spacing",
        "options": [
          {
            "after": true,
            "before": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent comma style in `<template>`",
            "url": "https://eslint.vuejs.org/rules/comma-style.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/comma-style",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/comma-style",
        "options": [
          "last"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "enforce unified spacing in HTML comments",
            "url": "https://eslint.vuejs.org/rules/html-comment-content-spacing.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/html-comment-content-spacing",
        "options": [
          "always",
          {
            "exceptions": [
              "-"
            ]
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing between keys and values in object literal properties in `<template>`",
            "url": "https://eslint.vuejs.org/rules/key-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/key-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/key-spacing",
        "options": [
          {
            "afterColon": true,
            "beforeColon": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing before and after keywords in `<template>`",
            "url": "https://eslint.vuejs.org/rules/keyword-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/keyword-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/keyword-spacing",
        "options": [
          {
            "after": true,
            "before": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent line breaks after opening and before closing braces in `<template>`",
            "url": "https://eslint.vuejs.org/rules/object-curly-newline.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/object-curly-newline",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/object-curly-newline",
        "options": [
          {
            "consistent": true,
            "multiline": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside braces in `<template>`",
            "url": "https://eslint.vuejs.org/rules/object-curly-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/object-curly-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/object-curly-spacing",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce placing object properties on separate lines in `<template>`",
            "url": "https://eslint.vuejs.org/rules/object-property-newline.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/object-property-newline",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/object-property-newline",
        "options": [
          {
            "allowMultiplePropertiesPerLine": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent linebreak style for operators in `<template>`",
            "url": "https://eslint.vuejs.org/rules/operator-linebreak.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/operator-linebreak",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/operator-linebreak",
        "options": [
          "before"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "require or disallow padding lines between blocks",
            "url": "https://eslint.vuejs.org/rules/padding-line-between-blocks.html"
          },
          "fixable": "whitespace"
        },
        "name": "vue/padding-line-between-blocks",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require quotes around object literal property names in `<template>`",
            "url": "https://eslint.vuejs.org/rules/quote-props.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/ts/quote-props",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "code"
        },
        "name": "vue/quote-props",
        "options": [
          "consistent-as-needed"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing inside parentheses in `<template>`",
            "url": "https://eslint.vuejs.org/rules/space-in-parens.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/space-in-parens",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/space-in-parens",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow spacing around embedded expressions of template strings in `<template>`",
            "url": "https://eslint.vuejs.org/rules/template-curly-spacing.html",
            "category": null,
            "extensionSource": {
              "url": "https://eslint.style/rules/js/template-curly-spacing",
              "name": "ESLint Stylistic"
            }
          },
          "fixable": "whitespace"
        },
        "name": "vue/template-curly-spacing",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/react/setup",
    "plugins": [
      "react",
      "react-dom",
      "react-hooks",
      "react-hooks-extra",
      "react-naming-convention",
      "react-refresh"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.?([cm])[jt]s?(x)"
    ],
    "name": "vinicunca/react/rules",
    "plugins": [],
    "rules": [
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow passing 'children' to void DOM elements",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-children-in-void-dom-elements"
          }
        },
        "name": "react-dom/no-children-in-void-dom-elements",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow when a DOM component is using 'dangerouslySetInnerHTML'",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml"
          }
        },
        "name": "react-dom/no-dangerously-set-innerhtml",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children"
          }
        },
        "name": "react-dom/no-dangerously-set-innerhtml-with-children",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow 'findDOMNode'",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-find-dom-node"
          }
        },
        "name": "react-dom/no-find-dom-node",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce that button component have an explicit 'type' attribute",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-missing-button-type"
          }
        },
        "name": "react-dom/no-missing-button-type",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce that 'iframe' component have an explicit 'sandbox' attribute",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox"
          }
        },
        "name": "react-dom/no-missing-iframe-sandbox",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce that namespaces are not used in React elements",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-namespace"
          }
        },
        "name": "react-dom/no-namespace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow usage of the return value of 'ReactDOM.render'",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-render-return-value"
          }
        },
        "name": "react-dom/no-render-return-value",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow 'javascript:' URLs as JSX event handler prop's value",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-script-url"
          }
        },
        "name": "react-dom/no-script-url",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow unsafe iframe 'sandbox' attribute combinations",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox"
          }
        },
        "name": "react-dom/no-unsafe-iframe-sandbox",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow 'target=\"_blank\"' on an external link without 'rel=\"noreferrer noopener\"'",
            "url": "https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank"
          }
        },
        "name": "react-dom/no-unsafe-target-blank",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "verifies the list of dependencies for Hooks like useEffect and similar",
            "recommended": true,
            "url": "https://github.com/facebook/react/issues/14920"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "react-hooks/exhaustive-deps",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforces the Rules of Hooks",
            "recommended": true,
            "url": "https://reactjs.org/docs/hooks-rules.html"
          }
        },
        "name": "react-hooks/rules-of-hooks",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem"
        },
        "name": "react-refresh/only-export-components",
        "options": [
          {
            "allowConstantExport": true,
            "allowExportNames": []
          }
        ]
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require a 'ref' parameter to be set when using 'forwardRef'",
            "url": "https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref"
          }
        },
        "name": "react/ensure-forward-ref-using-ref",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow accessing 'this.state' within 'setState'",
            "url": "https://eslint-react.xyz/docs/rules/no-access-state-in-setstate"
          }
        },
        "name": "react/no-access-state-in-setstate",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using Array index as 'key'",
            "url": "https://eslint-react.xyz/docs/rules/no-array-index-key"
          }
        },
        "name": "react/no-array-index-key",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'Children.count'",
            "url": "https://eslint-react.xyz/docs/rules/no-children-count"
          }
        },
        "name": "react/no-children-count",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'Children.forEach'",
            "url": "https://eslint-react.xyz/docs/rules/no-children-for-each"
          }
        },
        "name": "react/no-children-for-each",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'Children.map'",
            "url": "https://eslint-react.xyz/docs/rules/no-children-map"
          }
        },
        "name": "react/no-children-map",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'Children.only'",
            "url": "https://eslint-react.xyz/docs/rules/no-children-only"
          }
        },
        "name": "react/no-children-only",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow passing 'children' as props",
            "url": "https://eslint-react.xyz/docs/rules/no-children-prop"
          }
        },
        "name": "react/no-children-prop",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'Children.toArray'",
            "url": "https://eslint-react.xyz/docs/rules/no-children-to-array"
          }
        },
        "name": "react/no-children-to-array",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'cloneElement'",
            "url": "https://eslint-react.xyz/docs/rules/no-clone-element"
          }
        },
        "name": "react/no-clone-element",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow comments from being inserted as text nodes",
            "url": "https://eslint-react.xyz/docs/rules/no-comment-textnodes"
          }
        },
        "name": "react/no-comment-textnodes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'componentWillMount'",
            "url": "https://eslint-react.xyz/docs/rules/no-component-will-mount"
          }
        },
        "name": "react/no-component-will-mount",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'componentWillReceiveProps'",
            "url": "https://eslint-react.xyz/docs/rules/no-component-will-receive-props"
          }
        },
        "name": "react/no-component-will-receive-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'componentWillReceiveProps'",
            "url": "https://eslint-react.xyz/docs/rules/no-component-will-update"
          }
        },
        "name": "react/no-component-will-update",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'createRef' in function components",
            "url": "https://eslint-react.xyz/docs/rules/no-create-ref"
          }
        },
        "name": "react/no-create-ref",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow direct mutation of state",
            "url": "https://eslint-react.xyz/docs/rules/no-direct-mutation-state"
          }
        },
        "name": "react/no-direct-mutation-state",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow duplicate keys when rendering list",
            "url": "https://eslint-react.xyz/docs/rules/no-duplicate-key"
          }
        },
        "name": "react/no-duplicate-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow implicit 'key' props",
            "url": "https://eslint-react.xyz/docs/rules/no-implicit-key"
          }
        },
        "name": "react/no-implicit-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "require 'key' when rendering list",
            "url": "https://eslint-react.xyz/docs/rules/no-missing-key"
          }
        },
        "name": "react/no-missing-key",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using unstable nested components",
            "url": "https://eslint-react.xyz/docs/rules/no-nested-components"
          }
        },
        "name": "react/no-nested-components",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'shouldComponentUpdate' in class component extends 'React.PureComponent'",
            "url": "https://eslint-react.xyz/docs/rules/no-redundant-should-component-update"
          }
        },
        "name": "react/no-redundant-should-component-update",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'setState' in 'componentDidMount'",
            "url": "https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount"
          }
        },
        "name": "react/no-set-state-in-component-did-mount",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'setState' in 'componentDidUpdate'",
            "url": "https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update"
          }
        },
        "name": "react/no-set-state-in-component-did-update",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'setState' in 'componentWillUpdate'",
            "url": "https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update"
          }
        },
        "name": "react/no-set-state-in-component-will-update",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using deprecated string refs",
            "url": "https://eslint-react.xyz/docs/rules/no-string-refs"
          }
        },
        "name": "react/no-string-refs",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'UNSAFE_componentWillMount'",
            "url": "https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount"
          }
        },
        "name": "react/no-unsafe-component-will-mount",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'UNSAFE_componentWillReceiveProps'",
            "url": "https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props"
          }
        },
        "name": "react/no-unsafe-component-will-receive-props",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using 'UNSAFE_componentWillUpdate'",
            "url": "https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update"
          }
        },
        "name": "react/no-unsafe-component-will-update",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow passing constructed values to context providers",
            "url": "https://eslint-react.xyz/docs/rules/no-unstable-context-value"
          }
        },
        "name": "react/no-unstable-context-value",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow using unstable value as default param in function component",
            "url": "https://eslint-react.xyz/docs/rules/no-unstable-default-props"
          }
        },
        "name": "react/no-unstable-default-props",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow unused class component members",
            "url": "https://eslint-react.xyz/docs/rules/no-unused-class-component-members"
          }
        },
        "name": "react/no-unused-class-component-members",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow unused state of class component",
            "url": "https://eslint-react.xyz/docs/rules/no-unused-state"
          }
        },
        "name": "react/no-unused-state",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow unnecessary fragments",
            "url": "https://eslint-react.xyz/docs/rules/no-useless-fragment"
          }
        },
        "name": "react/no-useless-fragment",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce using destructuring assignment in component props and context",
            "url": "https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment"
          }
        },
        "name": "react/prefer-destructuring-assignment",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce using shorthand boolean attributes",
            "url": "https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean"
          }
        },
        "name": "react/prefer-shorthand-boolean",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "enforce using fragment syntax instead of 'Fragment' component",
            "url": "https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment"
          }
        },
        "name": "react/prefer-shorthand-fragment",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "disallow problematic leaked values from being rendered",
            "url": "https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering"
          }
        },
        "name": "react/no-leaked-conditional-rendering",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/solid/setup",
    "plugins": [
      "solid"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.?([cm])jsx",
      "**/*.?([cm])tsx"
    ],
    "name": "vinicunca/solid/rules",
    "plugins": [],
    "rules": [
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow early returns in components. Solid components only run once, and so conditionals should be inside JSX.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md"
          },
          "fixable": "code"
        },
        "name": "solid/components-return-once",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce naming DOM element event handlers consistently and prevent Solid's analysis from misunderstanding whether a prop should be an event handler.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "solid/event-handlers",
        "options": [
          {
            "ignoreCase": false,
            "warnOnSpread": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce consistent imports from \"solid-js\", \"solid-js/web\", and \"solid-js/store\".",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md"
          },
          "fixable": "code"
        },
        "name": "solid/imports",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow passing the same prop twice in JSX.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md"
          }
        },
        "name": "solid/jsx-no-duplicate-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow javascript: URLs.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md"
          }
        },
        "name": "solid/jsx-no-script-url",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow references to undefined variables in JSX. Handles custom directives.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md"
          },
          "fixable": "code"
        },
        "name": "solid/jsx-no-undef",
        "options": [
          {
            "typescriptEnabled": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Prevent variables used in JSX from being marked as unused.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md"
          }
        },
        "name": "solid/jsx-uses-vars",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md"
          },
          "fixable": "code"
        },
        "name": "solid/no-destructure",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md"
          },
          "fixable": "code",
          "hasSuggestions": true
        },
        "name": "solid/no-innerhtml",
        "options": [
          {
            "allowStatic": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow usage of dependency arrays in `createEffect` and `createMemo`.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md"
          },
          "fixable": "code"
        },
        "name": "solid/no-react-deps",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow usage of React-specific `className`/`htmlFor` props, which were deprecated in v1.4.0.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md"
          },
          "fixable": "code"
        },
        "name": "solid/no-react-specific-props",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md"
          },
          "hasSuggestions": true
        },
        "name": "solid/no-unknown-namespaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce using Solid's `<For />` component for mapping an array to JSX elements.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md"
          },
          "fixable": "code"
        },
        "name": "solid/prefer-for",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Enforce that reactivity (props, signals, memos, etc.) is properly used, so changes in those values will be tracked and update the view as expected.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md"
          }
        },
        "name": "solid/reactivity",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow extra closing tags for components without children.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md"
          },
          "fixable": "code"
        },
        "name": "solid/self-closing-comp",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Require CSS properties in the `style` prop to be valid and kebab-cased (ex. 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that property values with dimensions are strings, not numbers with implicit 'px' units.",
            "url": "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md"
          },
          "fixable": "code"
        },
        "name": "solid/style-prop",
        "options": [
          {
            "styleProps": [
              "style",
              "css"
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "vinicunca/svelte/setup",
    "plugins": [
      "svelte"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.svelte"
    ],
    "name": "vinicunca/svelte/rules",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "category": "Helpful warnings",
            "description": "Forbid the use of mutable exports with `var` or `let`.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/no-mutable-exports.md"
          }
        },
        "name": "import/no-mutable-exports",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of undeclared variables unless mentioned in `/*global */` comments",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-undef"
          }
        },
        "name": "no-undef",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unused-vars"
          }
        },
        "name": "no-unused-vars",
        "options": [
          {
            "args": "none",
            "caughtErrors": "none",
            "ignoreRestSiblings": true,
            "vars": "all",
            "varsIgnorePattern": "^(\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "support comment-directives in HTML template",
            "category": "System",
            "recommended": "base",
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/comment-directive/",
            "ruleId": "svelte/comment-directive",
            "ruleName": "comment-directive"
          },
          "type": "problem"
        },
        "name": "svelte/comment-directive",
        "options": []
      },
      {
        "level": "warn",
        "meta": {
          "docs": {
            "description": "disallow the use of `{@debug}`",
            "category": "Best Practices",
            "recommended": true,
            "default": "warn",
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-debug-tags/",
            "ruleId": "svelte/no-at-debug-tags",
            "ruleName": "no-at-debug-tags"
          },
          "type": "problem"
        },
        "name": "svelte/no-at-debug-tags",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow use of `{@html}` to prevent XSS attack",
            "category": "Security Vulnerability",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-html-tags/",
            "ruleId": "svelte/no-at-html-tags",
            "ruleName": "no-at-html-tags"
          },
          "type": "suggestion"
        },
        "name": "svelte/no-at-html-tags",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate conditions in `{#if}` / `{:else if}` chains",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-else-if-blocks/",
            "ruleId": "svelte/no-dupe-else-if-blocks",
            "ruleName": "no-dupe-else-if-blocks"
          },
          "type": "problem"
        },
        "name": "svelte/no-dupe-else-if-blocks",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate style properties",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-style-properties/",
            "ruleId": "svelte/no-dupe-style-properties",
            "ruleName": "no-dupe-style-properties"
          },
          "type": "problem"
        },
        "name": "svelte/no-dupe-style-properties",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate `use:` directives",
            "category": "Possible Errors",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-use-directives/",
            "ruleId": "svelte/no-dupe-use-directives",
            "ruleName": "no-dupe-use-directives"
          },
          "type": "problem"
        },
        "name": "svelte/no-dupe-use-directives",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow dynamic slot name",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dynamic-slot-name/",
            "ruleId": "svelte/no-dynamic-slot-name",
            "ruleName": "no-dynamic-slot-name"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "svelte/no-dynamic-slot-name",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow exporting load functions in `*.svelte` module in SvelteKit page components.",
            "category": "Possible Errors",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-export-load-in-svelte-module-in-kit-pages/",
            "ruleId": "svelte/no-export-load-in-svelte-module-in-kit-pages",
            "ruleName": "no-export-load-in-svelte-module-in-kit-pages"
          },
          "type": "problem"
        },
        "name": "svelte/no-export-load-in-svelte-module-in-kit-pages",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow variable or `function` declarations in nested blocks",
            "category": "Extension Rules",
            "recommended": true,
            "extensionRule": "no-inner-declarations",
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inner-declarations/",
            "ruleId": "svelte/no-inner-declarations",
            "ruleName": "no-inner-declarations"
          },
          "type": "problem"
        },
        "name": "svelte/no-inner-declarations",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow use of not function in event handler",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-not-function-handler/",
            "ruleId": "svelte/no-not-function-handler",
            "ruleName": "no-not-function-handler"
          },
          "type": "problem"
        },
        "name": "svelte/no-not-function-handler",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow objects in text mustache interpolation",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-object-in-text-mustaches/",
            "ruleId": "svelte/no-object-in-text-mustaches",
            "ruleName": "no-object-in-text-mustaches"
          },
          "type": "problem"
        },
        "name": "svelte/no-object-in-text-mustaches",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "it's not necessary to define functions in reactive statements",
            "category": "Best Practices",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-functions/",
            "ruleId": "svelte/no-reactive-functions",
            "ruleName": "no-reactive-functions"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "svelte/no-reactive-functions",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "don't assign literal values in reactive statements",
            "category": "Best Practices",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-literals/",
            "ruleId": "svelte/no-reactive-literals",
            "ruleName": "no-reactive-literals"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "svelte/no-reactive-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow shorthand style properties that override related longhand properties",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-shorthand-style-property-overrides/",
            "ruleId": "svelte/no-shorthand-style-property-overrides",
            "ruleName": "no-shorthand-style-property-overrides"
          },
          "type": "problem"
        },
        "name": "svelte/no-shorthand-style-property-overrides",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unknown `style:property`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unknown-style-directive-property/",
            "ruleId": "svelte/no-unknown-style-directive-property",
            "ruleName": "no-unknown-style-directive-property"
          },
          "type": "problem"
        },
        "name": "svelte/no-unknown-style-directive-property",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unused svelte-ignore comments",
            "category": "Best Practices",
            "recommended": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-svelte-ignore/",
            "ruleId": "svelte/no-unused-svelte-ignore",
            "ruleName": "no-unused-svelte-ignore"
          },
          "type": "suggestion"
        },
        "name": "svelte/no-unused-svelte-ignore",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary mustache interpolations",
            "category": "Best Practices",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-useless-mustaches/",
            "ruleId": "svelte/no-useless-mustaches",
            "ruleName": "no-useless-mustaches"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "svelte/no-useless-mustaches",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "store callbacks must use `set` param",
            "category": "Possible Errors",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/require-store-callbacks-use-set-param/",
            "ruleId": "svelte/require-store-callbacks-use-set-param",
            "ruleName": "require-store-callbacks-use-set-param"
          },
          "type": "suggestion"
        },
        "name": "svelte/require-store-callbacks-use-set-param",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "system rule for working this plugin",
            "category": "System",
            "recommended": "base",
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/system/",
            "ruleId": "svelte/system",
            "ruleName": "system"
          },
          "type": "problem"
        },
        "name": "svelte/system",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce keys to use variables defined in the `{#each}` block",
            "category": "Best Practices",
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-each-key/",
            "ruleId": "svelte/valid-each-key",
            "ruleName": "valid-each-key"
          },
          "type": "suggestion"
        },
        "name": "svelte/valid-each-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-vars",
        "options": [
          {
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "vars": "all",
            "varsIgnorePattern": "^(_|\\$\\$Props$|\\$\\$Events$|\\$\\$Slots$)"
          }
        ]
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent indentation",
            "url": "https://eslint.style/rules/ts/indent"
          },
          "fixable": "whitespace"
        },
        "name": "style/indent",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow trailing whitespace at the end of lines",
            "url": "https://eslint.style/rules/js/no-trailing-spaces"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-trailing-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "derived store should use same variable names between values and callback",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/derived-has-same-inputs-outputs/",
            "ruleId": "svelte/derived-has-same-inputs-outputs",
            "ruleName": "derived-has-same-inputs-outputs"
          },
          "type": "suggestion"
        },
        "name": "svelte/derived-has-same-inputs-outputs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow a space before tag's closing brackets",
            "category": "Stylistic Issues",
            "conflictWithPrettier": true,
            "recommended": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/html-closing-bracket-spacing/",
            "ruleId": "svelte/html-closing-bracket-spacing",
            "ruleName": "html-closing-bracket-spacing"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "svelte/html-closing-bracket-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce quotes style of HTML attributes",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/html-quotes/",
            "ruleId": "svelte/html-quotes",
            "ruleName": "html-quotes"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "svelte/html-quotes",
        "options": [
          {
            "prefer": "single"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent indentation",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/indent/",
            "ruleId": "svelte/indent",
            "ruleName": "indent"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "svelte/indent",
        "options": [
          {
            "alignAttributesVertically": true,
            "indent": 2
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce unified spacing in mustache",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/mustache-spacing/",
            "ruleId": "svelte/mustache-spacing",
            "ruleName": "mustache-spacing"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "svelte/mustache-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow spaces around equal signs in attribute",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-spaces-around-equal-signs-in-attribute/",
            "ruleId": "svelte/no-spaces-around-equal-signs-in-attribute",
            "ruleName": "no-spaces-around-equal-signs-in-attribute"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "svelte/no-spaces-around-equal-signs-in-attribute",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "disallow trailing whitespace at the end of lines",
            "category": "Extension Rules",
            "recommended": false,
            "extensionRule": "no-trailing-spaces",
            "conflictWithPrettier": true,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/",
            "ruleId": "svelte/no-trailing-spaces",
            "ruleName": "no-trailing-spaces"
          },
          "fixable": "whitespace"
        },
        "name": "svelte/no-trailing-spaces",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing after the `<!--` and before the `-->` in a HTML comment",
            "category": "Stylistic Issues",
            "recommended": false,
            "conflictWithPrettier": false,
            "url": "https://sveltejs.github.io/eslint-plugin-svelte/rules/spaced-html-comment/",
            "ruleId": "svelte/spaced-html-comment",
            "ruleName": "spaced-html-comment"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "svelte/spaced-html-comment",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/unocss",
    "plugins": [
      "unocss"
    ],
    "rules": [
      {
        "level": "warn",
        "meta": {
          "type": "layout",
          "fixable": "code",
          "docs": {
            "description": "Order of UnoCSS utilities in class attribute",
            "url": "https://unocss.dev/integrations/eslint#rules"
          }
        },
        "name": "unocss/order",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/astro/setup",
    "plugins": [
      "astro"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.astro"
    ],
    "name": "vinicunca/astro/rules",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "the client:only directive is missing the correct component's framework value",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/missing-client-only-directive-value/",
            "ruleId": "astro/missing-client-only-directive-value",
            "ruleName": "missing-client-only-directive-value"
          },
          "type": "problem"
        },
        "name": "astro/missing-client-only-directive-value",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow conflicting set directives and child contents",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/",
            "ruleId": "astro/no-conflict-set-directives",
            "ruleName": "no-conflict-set-directives"
          },
          "type": "problem"
        },
        "name": "astro/no-conflict-set-directives",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow using deprecated `Astro.canonicalURL`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/",
            "ruleId": "astro/no-deprecated-astro-canonicalurl",
            "ruleName": "no-deprecated-astro-canonicalurl"
          },
          "type": "problem"
        },
        "name": "astro/no-deprecated-astro-canonicalurl",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow using deprecated `Astro.fetchContent()`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/",
            "ruleId": "astro/no-deprecated-astro-fetchcontent",
            "ruleName": "no-deprecated-astro-fetchcontent"
          },
          "type": "problem",
          "fixable": "code"
        },
        "name": "astro/no-deprecated-astro-fetchcontent",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow using deprecated `Astro.resolve()`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/",
            "ruleId": "astro/no-deprecated-astro-resolve",
            "ruleName": "no-deprecated-astro-resolve"
          },
          "type": "problem"
        },
        "name": "astro/no-deprecated-astro-resolve",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow using deprecated `getEntryBySlug()`",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/",
            "ruleId": "astro/no-deprecated-getentrybyslug",
            "ruleName": "no-deprecated-getentrybyslug"
          },
          "type": "problem"
        },
        "name": "astro/no-deprecated-getentrybyslug",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "disallow use of `set:html` to prevent XSS attack",
            "category": "Security Vulnerability",
            "recommended": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/",
            "ruleId": "astro/no-set-html-directive",
            "ruleName": "no-set-html-directive"
          },
          "type": "suggestion"
        },
        "name": "astro/no-set-html-directive",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unused `define:vars={...}` in `style` tag",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/",
            "ruleId": "astro/no-unused-define-vars-in-style",
            "ruleName": "no-unused-define-vars-in-style"
          },
          "type": "problem"
        },
        "name": "astro/no-unused-define-vars-in-style",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "Require or disallow semicolons instead of ASI",
            "category": "Extension Rules",
            "recommended": false,
            "extensionRule": "semi",
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/",
            "ruleId": "astro/semi",
            "ruleName": "semi"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "astro/semi",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow warnings when compiling.",
            "category": "Possible Errors",
            "recommended": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/",
            "ruleId": "astro/valid-compile",
            "ruleName": "valid-compile"
          },
          "type": "problem"
        },
        "name": "astro/valid-compile",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent indentation",
            "url": "https://eslint.style/rules/ts/indent"
          },
          "fixable": "whitespace"
        },
        "name": "style/indent",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce closing tag location for multiline JSX",
            "url": "https://eslint.style/rules/jsx/jsx-closing-tag-location"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-closing-tag-location",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce JSX indentation. Deprecated, use `indent` rule instead.",
            "url": "https://eslint.style/rules/jsx/jsx-indent"
          },
          "deprecated": true,
          "fixable": "whitespace"
        },
        "name": "style/jsx-indent",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require one JSX element per line",
            "url": "https://eslint.style/rules/jsx/jsx-one-expression-per-line"
          },
          "fixable": "whitespace"
        },
        "name": "style/jsx-one-expression-per-line",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow multiple empty lines",
            "url": "https://eslint.style/rules/js/no-multiple-empty-lines"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-multiple-empty-lines",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/jsonc/setup",
    "plugins": [
      "jsonc"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.json",
      "**/*.json5",
      "**/*.jsonc"
    ],
    "name": "vinicunca/jsonc/rules",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow BigInt literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html",
            "ruleId": "jsonc/no-bigint-literals",
            "ruleName": "no-bigint-literals"
          },
          "type": "problem"
        },
        "name": "jsonc/no-bigint-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow binary expression",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html",
            "ruleId": "jsonc/no-binary-expression",
            "ruleName": "no-binary-expression"
          },
          "fixable": "code",
          "hasSuggestions": false,
          "type": "problem"
        },
        "name": "jsonc/no-binary-expression",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow binary numeric literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html",
            "ruleId": "jsonc/no-binary-numeric-literals",
            "ruleName": "no-binary-numeric-literals"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-binary-numeric-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow duplicate keys in object literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html",
            "ruleId": "jsonc/no-dupe-keys",
            "ruleName": "no-dupe-keys"
          },
          "type": "problem"
        },
        "name": "jsonc/no-dupe-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow escape sequences in identifiers.",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html",
            "ruleId": "jsonc/no-escape-sequence-in-identifier",
            "ruleName": "no-escape-sequence-in-identifier"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-escape-sequence-in-identifier",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow leading or trailing decimal points in numeric literals",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html",
            "ruleId": "jsonc/no-floating-decimal",
            "ruleName": "no-floating-decimal"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsonc/no-floating-decimal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow hexadecimal numeric literals",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html",
            "ruleId": "jsonc/no-hexadecimal-numeric-literals",
            "ruleName": "no-hexadecimal-numeric-literals"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-hexadecimal-numeric-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow Infinity",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html",
            "ruleId": "jsonc/no-infinity",
            "ruleName": "no-infinity"
          },
          "type": "problem"
        },
        "name": "jsonc/no-infinity",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow multiline strings",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html",
            "ruleId": "jsonc/no-multi-str",
            "ruleName": "no-multi-str"
          },
          "type": "suggestion"
        },
        "name": "jsonc/no-multi-str",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow NaN",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html",
            "ruleId": "jsonc/no-nan",
            "ruleName": "no-nan"
          },
          "type": "problem"
        },
        "name": "jsonc/no-nan",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow number property keys",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html",
            "ruleId": "jsonc/no-number-props",
            "ruleName": "no-number-props"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-number-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow numeric separators",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html",
            "ruleId": "jsonc/no-numeric-separators",
            "ruleName": "no-numeric-separators"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-numeric-separators",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow legacy octal literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html",
            "ruleId": "jsonc/no-octal",
            "ruleName": "no-octal"
          },
          "type": "suggestion"
        },
        "name": "jsonc/no-octal",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow octal escape sequences in string literals",
            "recommended": null,
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html",
            "ruleId": "jsonc/no-octal-escape",
            "ruleName": "no-octal-escape"
          },
          "type": "suggestion"
        },
        "name": "jsonc/no-octal-escape",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow octal numeric literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html",
            "ruleId": "jsonc/no-octal-numeric-literals",
            "ruleName": "no-octal-numeric-literals"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-octal-numeric-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow parentheses around the expression",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html",
            "ruleId": "jsonc/no-parenthesized",
            "ruleName": "no-parenthesized"
          },
          "fixable": "code",
          "hasSuggestions": false,
          "type": "problem"
        },
        "name": "jsonc/no-parenthesized",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow plus sign",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html",
            "ruleId": "jsonc/no-plus-sign",
            "ruleName": "no-plus-sign"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-plus-sign",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow RegExp literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html",
            "ruleId": "jsonc/no-regexp-literals",
            "ruleName": "no-regexp-literals"
          },
          "type": "problem"
        },
        "name": "jsonc/no-regexp-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow sparse arrays",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html",
            "ruleId": "jsonc/no-sparse-arrays",
            "ruleName": "no-sparse-arrays"
          },
          "type": "problem"
        },
        "name": "jsonc/no-sparse-arrays",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow template literals",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html",
            "ruleId": "jsonc/no-template-literals",
            "ruleName": "no-template-literals"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-template-literals",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow `undefined`",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html",
            "ruleId": "jsonc/no-undefined-value",
            "ruleName": "no-undefined-value"
          },
          "type": "problem"
        },
        "name": "jsonc/no-undefined-value",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow Unicode code point escape sequences.",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html",
            "ruleId": "jsonc/no-unicode-codepoint-escapes",
            "ruleName": "no-unicode-codepoint-escapes"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/no-unicode-codepoint-escapes",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow unnecessary escape usage",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": true,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html",
            "ruleId": "jsonc/no-useless-escape",
            "ruleName": "no-useless-escape"
          },
          "hasSuggestions": true,
          "type": "suggestion"
        },
        "name": "jsonc/no-useless-escape",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow spaces after unary operators",
            "recommended": [
              "json",
              "jsonc",
              "json5"
            ],
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html",
            "ruleId": "jsonc/space-unary-ops",
            "ruleName": "space-unary-ops"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "jsonc/space-unary-ops",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow invalid number for JSON",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html",
            "ruleId": "jsonc/valid-json-number",
            "ruleName": "valid-json-number"
          },
          "fixable": "code",
          "type": "problem"
        },
        "name": "jsonc/valid-json-number",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow parsing errors in Vue custom blocks",
            "recommended": [
              "json",
              "json5",
              "jsonc"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html",
            "ruleId": "jsonc/vue-custom-block/no-parsing-error",
            "ruleName": "vue-custom-block/no-parsing-error"
          },
          "type": "problem"
        },
        "name": "jsonc/vue-custom-block/no-parsing-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow or enforce spaces inside of brackets",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html",
            "ruleId": "jsonc/array-bracket-spacing",
            "ruleName": "array-bracket-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/array-bracket-spacing",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow trailing commas",
            "recommended": [
              "json"
            ],
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html",
            "ruleId": "jsonc/comma-dangle",
            "ruleName": "comma-dangle"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "jsonc/comma-dangle",
        "options": [
          "never"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent comma style",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html",
            "ruleId": "jsonc/comma-style",
            "ruleName": "comma-style"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "jsonc/comma-style",
        "options": [
          "last"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent indentation",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html",
            "ruleId": "jsonc/indent",
            "ruleName": "indent"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/indent",
        "options": [
          2
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing between keys and values in object literal properties",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html",
            "ruleId": "jsonc/key-spacing",
            "ruleName": "key-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/key-spacing",
        "options": [
          {
            "afterColon": true,
            "beforeColon": false
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent line breaks inside braces",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html",
            "ruleId": "jsonc/object-curly-newline",
            "ruleName": "object-curly-newline"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/object-curly-newline",
        "options": [
          {
            "consistent": true,
            "multiline": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside braces",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html",
            "ruleId": "jsonc/object-curly-spacing",
            "ruleName": "object-curly-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/object-curly-spacing",
        "options": [
          "always"
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce placing object properties on separate lines",
            "recommended": null,
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html",
            "ruleId": "jsonc/object-property-newline",
            "ruleName": "object-property-newline"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "jsonc/object-property-newline",
        "options": [
          {
            "allowMultiplePropertiesPerLine": true
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require quotes around object literal property names",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html",
            "ruleId": "jsonc/quote-props",
            "ruleName": "quote-props"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "jsonc/quote-props",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce use of double or single quotes",
            "recommended": [
              "json",
              "jsonc"
            ],
            "extensionRule": true,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html",
            "ruleId": "jsonc/quotes",
            "ruleName": "quotes"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "jsonc/quotes",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/package.json"
    ],
    "name": "vinicunca/sort/package-json",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require array values to be sorted",
            "recommended": null,
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html",
            "ruleId": "jsonc/sort-array-values",
            "ruleName": "sort-array-values"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsonc/sort-array-values",
        "options": [
          {
            "order": {
              "type": "asc"
            },
            "pathPattern": "^files$"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require object keys to be sorted",
            "recommended": null,
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html",
            "ruleId": "jsonc/sort-keys",
            "ruleName": "sort-keys"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsonc/sort-keys",
        "options": [
          {
            "order": [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "contributors",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig"
            ],
            "pathPattern": "^$"
          },
          {
            "order": {
              "type": "asc"
            },
            "pathPattern": "^(?:dev|peer|optional|bundled)?[Dd]ependencies$"
          },
          {
            "order": {
              "type": "asc"
            },
            "pathPattern": "^resolutions$"
          },
          {
            "order": {
              "type": "asc"
            },
            "pathPattern": "^pnpm.overrides$"
          },
          {
            "order": [
              "types",
              "import",
              "require",
              "default"
            ],
            "pathPattern": "^exports.*$"
          },
          {
            "order": [
              "pre-commit",
              "prepare-commit-msg",
              "commit-msg",
              "post-commit",
              "pre-rebase",
              "post-rewrite",
              "post-checkout",
              "post-merge",
              "pre-push",
              "pre-auto-gc"
            ],
            "pathPattern": "^(?:gitHooks|husky|simple-git-hooks)$"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/tsconfig.json",
      "**/tsconfig.*.json"
    ],
    "name": "vinicunca/sort/tsconfig",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require object keys to be sorted",
            "recommended": null,
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html",
            "ruleId": "jsonc/sort-keys",
            "ruleName": "sort-keys"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "jsonc/sort-keys",
        "options": [
          {
            "order": [
              "extends",
              "compilerOptions",
              "references",
              "files",
              "include",
              "exclude"
            ],
            "pathPattern": "^$"
          },
          {
            "order": [
              "incremental",
              "composite",
              "tsBuildInfoFile",
              "disableSourceOfProjectReferenceRedirect",
              "disableSolutionSearching",
              "disableReferencedProjectLoad",
              "target",
              "jsx",
              "jsxFactory",
              "jsxFragmentFactory",
              "jsxImportSource",
              "lib",
              "moduleDetection",
              "noLib",
              "reactNamespace",
              "useDefineForClassFields",
              "emitDecoratorMetadata",
              "experimentalDecorators",
              "baseUrl",
              "rootDir",
              "rootDirs",
              "customConditions",
              "module",
              "moduleResolution",
              "moduleSuffixes",
              "noResolve",
              "paths",
              "resolveJsonModule",
              "resolvePackageJsonExports",
              "resolvePackageJsonImports",
              "typeRoots",
              "types",
              "allowArbitraryExtensions",
              "allowImportingTsExtensions",
              "allowUmdGlobalAccess",
              "allowJs",
              "checkJs",
              "maxNodeModuleJsDepth",
              "strict",
              "strictBindCallApply",
              "strictFunctionTypes",
              "strictNullChecks",
              "strictPropertyInitialization",
              "allowUnreachableCode",
              "allowUnusedLabels",
              "alwaysStrict",
              "exactOptionalPropertyTypes",
              "noFallthroughCasesInSwitch",
              "noImplicitAny",
              "noImplicitOverride",
              "noImplicitReturns",
              "noImplicitThis",
              "noPropertyAccessFromIndexSignature",
              "noUncheckedIndexedAccess",
              "noUnusedLocals",
              "noUnusedParameters",
              "useUnknownInCatchVariables",
              "declaration",
              "declarationDir",
              "declarationMap",
              "downlevelIteration",
              "emitBOM",
              "emitDeclarationOnly",
              "importHelpers",
              "importsNotUsedAsValues",
              "inlineSourceMap",
              "inlineSources",
              "mapRoot",
              "newLine",
              "noEmit",
              "noEmitHelpers",
              "noEmitOnError",
              "outDir",
              "outFile",
              "preserveConstEnums",
              "preserveValueImports",
              "removeComments",
              "sourceMap",
              "sourceRoot",
              "stripInternal",
              "allowSyntheticDefaultImports",
              "esModuleInterop",
              "forceConsistentCasingInFileNames",
              "isolatedModules",
              "preserveSymlinks",
              "verbatimModuleSyntax",
              "skipDefaultLibCheck",
              "skipLibCheck"
            ],
            "pathPattern": "^compilerOptions$"
          }
        ]
      }
    ]
  },
  {
    "name": "vinicunca/yaml/setup",
    "plugins": [
      "yaml"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.y?(a)ml"
    ],
    "name": "vinicunca/yaml/rules",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing after the `//` or `/*` in a comment",
            "url": "https://eslint.style/rules/js/spaced-comment"
          },
          "fixable": "whitespace"
        },
        "name": "style/spaced-comment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow block style mappings.",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html",
            "ruleId": "yml/block-mapping",
            "ruleName": "block-mapping"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "yaml/block-mapping",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow block style sequences.",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html",
            "ruleId": "yml/block-sequence",
            "ruleName": "block-sequence"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "yaml/block-sequence",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow empty mapping keys",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html",
            "ruleId": "yml/no-empty-key",
            "ruleName": "no-empty-key"
          },
          "type": "suggestion"
        },
        "name": "yaml/no-empty-key",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow empty sequence entries",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html",
            "ruleId": "yml/no-empty-sequence-entry",
            "ruleName": "no-empty-sequence-entry"
          },
          "type": "suggestion"
        },
        "name": "yaml/no-empty-sequence-entry",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow irregular whitespace",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": "no-irregular-whitespace",
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html",
            "ruleId": "yml/no-irregular-whitespace",
            "ruleName": "no-irregular-whitespace"
          },
          "type": "problem"
        },
        "name": "yaml/no-irregular-whitespace",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow plain style scalar.",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html",
            "ruleId": "yml/plain-scalar",
            "ruleName": "plain-scalar"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "yaml/plain-scalar",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow parsing errors in Vue custom blocks",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html",
            "ruleId": "yml/vue-custom-block/no-parsing-error",
            "ruleName": "vue-custom-block/no-parsing-error"
          },
          "type": "problem"
        },
        "name": "yaml/vue-custom-block/no-parsing-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent line breaks after `?` indicator",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html",
            "ruleId": "yml/block-mapping-question-indicator-newline",
            "ruleName": "block-mapping-question-indicator-newline"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/block-mapping-question-indicator-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent line breaks after `-` indicator",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html",
            "ruleId": "yml/block-sequence-hyphen-indicator-newline",
            "ruleName": "block-sequence-hyphen-indicator-newline"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/block-sequence-hyphen-indicator-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent line breaks inside braces",
            "categories": [
              "standard"
            ],
            "extensionRule": "object-curly-newline",
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html",
            "ruleId": "yml/flow-mapping-curly-newline",
            "ruleName": "flow-mapping-curly-newline"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/flow-mapping-curly-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside braces",
            "categories": [
              "standard"
            ],
            "extensionRule": "object-curly-spacing",
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html",
            "ruleId": "yml/flow-mapping-curly-spacing",
            "ruleName": "flow-mapping-curly-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "yaml/flow-mapping-curly-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce linebreaks after opening and before closing flow sequence brackets",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-bracket-newline",
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html",
            "ruleId": "yml/flow-sequence-bracket-newline",
            "ruleName": "flow-sequence-bracket-newline"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/flow-sequence-bracket-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside flow sequence brackets",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-bracket-spacing",
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html",
            "ruleId": "yml/flow-sequence-bracket-spacing",
            "ruleName": "flow-sequence-bracket-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "yaml/flow-sequence-bracket-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent indentation",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html",
            "ruleId": "yml/indent",
            "ruleName": "indent"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/indent",
        "options": [
          2
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing between keys and values in mapping pairs",
            "categories": [
              "standard"
            ],
            "extensionRule": "key-spacing",
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html",
            "ruleId": "yml/key-spacing",
            "ruleName": "key-spacing"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "yaml/key-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow tabs for indentation.",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html",
            "ruleId": "yml/no-tab-indent",
            "ruleName": "no-tab-indent"
          },
          "type": "problem"
        },
        "name": "yaml/no-tab-indent",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce the consistent use of either double, or single quotes",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "layout": true,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html",
            "ruleId": "yml/quotes",
            "ruleName": "quotes"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "yaml/quotes",
        "options": [
          {
            "avoidEscape": false,
            "prefer": "single"
          }
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing after the `#` in a comment",
            "categories": [
              "standard"
            ],
            "extensionRule": "spaced-comment",
            "layout": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html",
            "ruleId": "yml/spaced-comment",
            "ruleName": "spaced-comment"
          },
          "fixable": "whitespace",
          "type": "suggestion"
        },
        "name": "yaml/spaced-comment",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/toml/setup",
    "plugins": [
      "toml"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.toml"
    ],
    "name": "vinicunca/toml/rules",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent spacing after the `//` or `/*` in a comment",
            "url": "https://eslint.style/rules/js/spaced-comment"
          },
          "fixable": "whitespace"
        },
        "name": "style/spaced-comment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent comma style in array",
            "categories": [
              "standard"
            ],
            "extensionRule": "comma-style",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/comma-style.html",
            "ruleId": "toml/comma-style",
            "ruleName": "comma-style"
          },
          "type": "layout",
          "fixable": "code"
        },
        "name": "toml/comma-style",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow defining pair keys out-of-order",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/keys-order.html",
            "ruleId": "toml/keys-order",
            "ruleName": "keys-order"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "toml/keys-order",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow spacing around infix operators",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/no-space-dots.html",
            "ruleId": "toml/no-space-dots",
            "ruleName": "no-space-dots"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/no-space-dots",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow number separators that to not enhance readability.",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/no-unreadable-number-separator.html",
            "ruleId": "toml/no-unreadable-number-separator",
            "ruleName": "no-unreadable-number-separator"
          },
          "type": "suggestion"
        },
        "name": "toml/no-unreadable-number-separator",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow precision of fractional seconds greater than the specified value.",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-fractional-seconds.html",
            "ruleId": "toml/precision-of-fractional-seconds",
            "ruleName": "precision-of-fractional-seconds"
          },
          "type": "problem"
        },
        "name": "toml/precision-of-fractional-seconds",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow precision of integer greater than the specified value.",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-integer.html",
            "ruleId": "toml/precision-of-integer",
            "ruleName": "precision-of-integer"
          },
          "type": "problem"
        },
        "name": "toml/precision-of-integer",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow defining tables out-of-order",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/tables-order.html",
            "ruleId": "toml/tables-order",
            "ruleName": "tables-order"
          },
          "fixable": "code",
          "type": "suggestion"
        },
        "name": "toml/tables-order",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "disallow parsing errors in Vue custom blocks",
            "categories": [
              "recommended",
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/vue-custom-block/no-parsing-error.html",
            "ruleId": "toml/vue-custom-block/no-parsing-error",
            "ruleName": "vue-custom-block/no-parsing-error"
          },
          "type": "problem"
        },
        "name": "toml/vue-custom-block/no-parsing-error",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce linebreaks after opening and before closing array brackets",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-bracket-newline",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-newline.html",
            "ruleId": "toml/array-bracket-newline",
            "ruleName": "array-bracket-newline"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "toml/array-bracket-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside array brackets",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-bracket-spacing",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-spacing.html",
            "ruleId": "toml/array-bracket-spacing",
            "ruleName": "array-bracket-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "toml/array-bracket-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce line breaks between array elements",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-element-newline",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/array-element-newline.html",
            "ruleId": "toml/array-element-newline",
            "ruleName": "array-element-newline"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "toml/array-element-newline",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent indentation",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/indent.html",
            "ruleId": "toml/indent",
            "ruleName": "indent"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/indent",
        "options": [
          2
        ]
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside braces",
            "categories": [
              "standard"
            ],
            "extensionRule": "object-curly-spacing",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-spacing.html",
            "ruleId": "toml/inline-table-curly-spacing",
            "ruleName": "inline-table-curly-spacing"
          },
          "type": "layout",
          "fixable": "whitespace"
        },
        "name": "toml/inline-table-curly-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing between keys and values in key/value pairs",
            "categories": [
              "standard"
            ],
            "extensionRule": "key-spacing",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/key-spacing.html",
            "ruleId": "toml/key-spacing",
            "ruleName": "key-spacing"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/key-spacing",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow padding lines between pairs",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-pairs.html",
            "ruleId": "toml/padding-line-between-pairs",
            "ruleName": "padding-line-between-pairs"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/padding-line-between-pairs",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow padding lines between tables",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-tables.html",
            "ruleId": "toml/padding-line-between-tables",
            "ruleName": "padding-line-between-tables"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/padding-line-between-tables",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "require or disallow quotes around keys",
            "categories": [
              "standard"
            ],
            "extensionRule": false,
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/quoted-keys.html",
            "ruleId": "toml/quoted-keys",
            "ruleName": "quoted-keys"
          },
          "fixable": "code",
          "type": "layout"
        },
        "name": "toml/quoted-keys",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing after the `#` in a comment",
            "categories": [
              "standard"
            ],
            "extensionRule": "spaced-comment",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/spaced-comment.html",
            "ruleId": "toml/spaced-comment",
            "ruleName": "spaced-comment"
          },
          "fixable": "whitespace",
          "type": "suggestion"
        },
        "name": "toml/spaced-comment",
        "options": []
      },
      {
        "level": "error",
        "meta": {
          "docs": {
            "description": "enforce consistent spacing inside table brackets",
            "categories": [
              "standard"
            ],
            "extensionRule": "array-bracket-spacing",
            "url": "https://ota-meshi.github.io/eslint-plugin-toml/rules/table-bracket-spacing.html",
            "ruleId": "toml/table-bracket-spacing",
            "ruleName": "table-bracket-spacing"
          },
          "fixable": "whitespace",
          "type": "layout"
        },
        "name": "toml/table-bracket-spacing",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/markdown/setup",
    "plugins": [
      "markdown"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.md"
    ],
    "name": "vinicunca/markdown/processor",
    "plugins": [],
    "rules": []
  },
  {
    "files": [
      "**/*.md"
    ],
    "name": "vinicunca/markdown/parser",
    "plugins": [],
    "rules": []
  },
  {
    "files": [
      "**/*.md/**/*.?([cm])[jt]s?(x)",
      "**/*.md/**/*.vue"
    ],
    "name": "vinicunca/markdown/disables",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "category": "Style guide",
            "description": "Enforce a newline after import statements.",
            "url": "https://github.com/un-ts/eslint-plugin-import-x/blob/v3.1.0/docs/rules/newline-after-import.md"
          },
          "fixable": "whitespace"
        },
        "name": "import/newline-after-import",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `alert`, `confirm`, and `prompt`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-alert"
          }
        },
        "name": "no-alert",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow the use of `console`",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-console"
          },
          "hasSuggestions": true
        },
        "name": "no-console",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of undeclared variables unless mentioned in `/*global */` comments",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-undef"
          }
        },
        "name": "no-undef",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow unused expressions",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/no-unused-expressions"
          }
        },
        "name": "no-unused-expressions",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": true,
            "url": "https://eslint.org/docs/latest/rules/no-unused-vars"
          }
        },
        "name": "no-unused-vars",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "docs": {
            "description": "enforce either `process` or `require(\"process\")`",
            "recommended": false,
            "url": "https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md"
          },
          "type": "suggestion",
          "fixable": null
        },
        "name": "node/prefer-global/process",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow trailing commas",
            "url": "https://eslint.style/rules/ts/comma-dangle"
          },
          "fixable": "code"
        },
        "name": "style/comma-dangle",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow newline at the end of files",
            "url": "https://eslint.style/rules/js/eol-last"
          },
          "fixable": "whitespace"
        },
        "name": "style/eol-last",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Enforce consistent usage of type imports",
            "url": "https://typescript-eslint.io/rules/consistent-type-imports"
          },
          "fixable": "code"
        },
        "name": "ts/consistent-type-imports",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow TypeScript namespaces",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-namespace"
          }
        },
        "name": "ts/no-namespace",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "suggestion",
          "docs": {
            "description": "Disallow variable redeclaration",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-redeclare"
          }
        },
        "name": "ts/no-redeclare",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow invocation of `require()`",
            "recommended": "recommended",
            "url": "https://typescript-eslint.io/rules/no-require-imports"
          }
        },
        "name": "ts/no-require-imports",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-unused-vars"
          }
        },
        "name": "ts/no-unused-vars",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow the use of variables before they are defined",
            "extendsBaseRule": true,
            "url": "https://typescript-eslint.io/rules/no-use-before-define"
          }
        },
        "name": "ts/no-use-before-define",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "deprecated": true,
          "replacedBy": [
            "@typescript-eslint/no-require-imports"
          ],
          "type": "problem",
          "docs": {
            "description": "Disallow `require` statements except in import statements",
            "url": "https://typescript-eslint.io/rules/no-var-requires"
          }
        },
        "name": "ts/no-var-requires",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow Unicode byte order mark (BOM)",
            "recommended": false,
            "url": "https://eslint.org/docs/latest/rules/unicode-bom"
          },
          "fixable": "whitespace"
        },
        "name": "unicode-bom",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-imports",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "problem",
          "docs": {
            "description": "Disallow unused variables",
            "recommended": "recommended",
            "extendsBaseRule": true,
            "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md"
          },
          "fixable": "code"
        },
        "name": "unused-imports/no-unused-vars",
        "options": []
      }
    ]
  },
  {
    "name": "vinicunca/formatter/setup",
    "plugins": [
      "format"
    ],
    "rules": []
  },
  {
    "files": [
      "**/*.css",
      "**/*.{p,post}css"
    ],
    "name": "vinicunca/formatter/css",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "css"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.scss"
    ],
    "name": "vinicunca/formatter/scss",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "scss"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.less"
    ],
    "name": "vinicunca/formatter/less",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "less"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.html"
    ],
    "name": "vinicunca/formatter/html",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "html"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.xml"
    ],
    "name": "antfu/formatter/xml",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "xmlQuoteAttributes": "double",
            "xmlSelfClosingSpace": true,
            "xmlSortAttributesByKey": false,
            "xmlWhitespaceSensitivity": "ignore",
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "xml",
            "plugins": [
              "@prettier/plugin-xml"
            ]
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.svg"
    ],
    "name": "antfu/formatter/svg",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "xmlQuoteAttributes": "double",
            "xmlSelfClosingSpace": true,
            "xmlSortAttributesByKey": false,
            "xmlWhitespaceSensitivity": "ignore",
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "xml",
            "plugins": [
              "@prettier/plugin-xml"
            ]
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.md"
    ],
    "name": "vinicunca/formatter/markdown",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "printWidth": 120,
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "embeddedLanguageFormatting": "off",
            "parser": "markdown"
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.astro"
    ],
    "name": "vinicunca/formatter/astro",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "astro",
            "plugins": [
              "prettier-plugin-astro"
            ]
          }
        ]
      }
    ]
  },
  {
    "files": [
      "**/*.astro",
      "**/*.astro/*.ts"
    ],
    "name": "vinicunca/formatter/astro/disables",
    "plugins": [],
    "rules": [
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require parentheses around arrow function arguments",
            "url": "https://eslint.style/rules/js/arrow-parens"
          },
          "fixable": "code"
        },
        "name": "style/arrow-parens",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow or enforce spaces inside of blocks after opening block and before closing block",
            "url": "https://eslint.style/rules/ts/block-spacing"
          },
          "fixable": "whitespace"
        },
        "name": "style/block-spacing",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow trailing commas",
            "url": "https://eslint.style/rules/ts/comma-dangle"
          },
          "fixable": "code"
        },
        "name": "style/comma-dangle",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce consistent indentation",
            "url": "https://eslint.style/rules/ts/indent"
          },
          "fixable": "whitespace"
        },
        "name": "style/indent",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Disallow multiple spaces",
            "url": "https://eslint.style/rules/js/no-multi-spaces"
          },
          "fixable": "whitespace"
        },
        "name": "style/no-multi-spaces",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Enforce the consistent use of either backticks, double, or single quotes",
            "url": "https://eslint.style/rules/ts/quotes"
          },
          "fixable": "code"
        },
        "name": "style/quotes",
        "options": []
      },
      {
        "level": "off",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Require or disallow semicolons instead of ASI",
            "url": "https://eslint.style/rules/ts/semi"
          },
          "fixable": "code"
        },
        "name": "style/semi",
        "options": []
      }
    ]
  },
  {
    "files": [
      "**/*.{g,graph}ql"
    ],
    "name": "vinicunca/formatter/graphql",
    "plugins": [],
    "rules": [
      {
        "level": "error",
        "meta": {
          "type": "layout",
          "docs": {
            "description": "Use Prettier to format code",
            "category": "Stylistic"
          },
          "fixable": "whitespace"
        },
        "name": "format/prettier",
        "options": [
          {
            "endOfLine": "auto",
            "semi": true,
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all",
            "useTabs": false,
            "parser": "graphql"
          }
        ]
      }
    ]
  }
]);

export const GLOB_EXCLUDE = Object.freeze(["**/node_modules","**/dist","**/package-lock.json","**/yarn.lock","**/pnpm-lock.yaml","**/bun.lockb","**/output","**/coverage","**/temp","**/.temp","**/tmp","**/.tmp","**/.history","**/.vitepress/cache","**/.nuxt","**/.next","**/.svelte-kit","**/.vercel","**/.changeset","**/.idea","**/.cache","**/.output","**/.vite-inspect","**/.yarn","**/vite.config.*.timestamp-*","**/CHANGELOG*.md","**/*.min.*","**/LICENSE*","**/__snapshots__","**/auto-import?(s).d.ts","**/components.d.ts"])
