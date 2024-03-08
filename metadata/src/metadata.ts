import type { ConfigInfo } from './types'

export const packages: Readonly<ConfigInfo[]> = Object.freeze({
  "javascript": [
    {
      "name": "vinicunca:javascript",
      "plugins": [
        "perfectionist",
        "unused-imports",
        "vinicunca"
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
            }
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
              "recommended": false,
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
              "recommended": true,
              "url": "https://eslint.org/docs/latest/rules/no-new-symbol"
            }
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
              "extendsBaseRule": false,
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
              "extendsBaseRule": false,
              "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
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
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Cognitive Complexity of functions should not be too high",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/cognitive-complexity"
            },
            "type": "suggestion"
          },
          "name": "vinicunca/cognitive-complexity",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "All branches in a conditional structure should not have exactly the same implementation",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-all-duplicated-branches"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-all-duplicated-branches",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Collapsible \"if\" statements should be merged",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-collapsible-if"
            },
            "type": "suggestion"
          },
          "name": "vinicunca/no-collapsible-if",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "String literals should not be duplicated",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-duplicate-string"
            },
            "type": "suggestion"
          },
          "name": "vinicunca/no-duplicate-string",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Two branches in a conditional structure should not have exactly the same implementation",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-duplicated-branches"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-duplicated-branches",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Empty collections should not be accessed or iterated",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-empty-collection"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-empty-collection",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Related \"if-else-if\" and \"switch-case\" statements should not have the same condition",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-identical-conditions"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-identical-conditions",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Identical expressions should not be used on both sides of a binary operator",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-identical-expressions"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-identical-expressions",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Functions should not have identical implementations",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-identical-functions"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-identical-functions",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Return values from functions without side effects should not be ignored",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-ignored-return"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-ignored-return",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Template literals should not be nested",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-nested-template-literals"
            },
            "type": "suggestion"
          },
          "name": "vinicunca/no-nested-template-literals",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Boolean literals should not be redundant",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-redundant-boolean"
            },
            "type": "suggestion"
          },
          "name": "vinicunca/no-redundant-boolean",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Jump statements should not be redundant",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-redundant-jump"
            },
            "hasSuggestions": true,
            "type": "suggestion"
          },
          "name": "vinicunca/no-redundant-jump",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Collection and array contents should be used",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-unused-collection"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-unused-collection",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "The output of functions that don't return anything should not be used",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-use-of-empty-return-value"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-use-of-empty-return-value",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Local variables should not be declared and then immediately returned or thrown",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/prefer-immediate-return"
            },
            "fixable": "code",
            "type": "suggestion"
          },
          "name": "vinicunca/prefer-immediate-return",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Return of boolean expressions should not be wrapped into an \"if-then-else\" statement",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/prefer-single-boolean-return"
            },
            "hasSuggestions": true,
            "type": "suggestion"
          },
          "name": "vinicunca/prefer-single-boolean-return",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted imports",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-imports"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-imports",
          "options": [
            {
              "groups": [
                "type",
                [
                  "builtin",
                  "external"
                ],
                "internal-type",
                "internal",
                [
                  "parent-type",
                  "sibling-type",
                  "index-type"
                ],
                [
                  "parent",
                  "sibling",
                  "index"
                ],
                "object",
                "unknown"
              ],
              "internal-pattern": [
                "~/**",
                "~~/**"
              ],
              "newlines-between": "always",
              "order": "asc",
              "type": "natural"
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted classes",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-classes"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-classes",
          "options": [
            {
              "groups": [
                "index-signature",
                "static-property",
                "private-property",
                "property",
                "constructor",
                "static-method",
                "private-method",
                "method",
                [
                  "get-method",
                  "set-method"
                ],
                "unknown"
              ],
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted objects",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-objects"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-objects",
          "options": [
            {
              "partition-by-comment": false,
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted arrays before include method",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-array-includes"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-array-includes",
          "options": [
            {
              "spread-last": true,
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted Svelte attributes",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-svelte-attributes",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted Astro attributes",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-astro-attributes"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-astro-attributes",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "off",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted Vue attributes",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes"
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
              "description": "enforce sorted named exports",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-named-exports"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-named-exports",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted named imports",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-named-imports",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted object types",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-object-types",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted union types",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-union-types",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted interface properties",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-interfaces"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-interfaces",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted JSX props",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-jsx-props",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted exports",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-exports"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-exports",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted TypeScript enums",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-enums"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-enums",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "enforce sorted Map elements",
              "url": "https://eslint-plugin-perfectionist.azat.io/rules/sort-maps"
            },
            "fixable": "code"
          },
          "name": "perfectionist/sort-maps",
          "options": [
            {
              "type": "natural",
              "order": "asc",
              "ignore-case": false
            }
          ]
        }
      ]
    },
    {
      "files": [
        "**/scripts/**/*.?([cm])[jt]s?(x)",
        "**/cli.?([cm])[jt]s?(x)"
      ],
      "name": "vinicunca:javascript:overrides",
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
    }
  ],
  "eslint-comments": [
    {
      "name": "vinicunca:eslint-comments",
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
              "url": "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html"
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
              "url": "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html"
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
              "url": "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html"
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
              "url": "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html"
            },
            "fixable": null,
            "type": "problem"
          },
          "name": "eslint-comments/no-unused-enable",
          "options": []
        }
      ]
    }
  ],
  "node": [
    {
      "name": "vinicunca:node",
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
    }
  ],
  "jsdoc": [
    {
      "name": "vinicunca:jsdoc",
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
    }
  ],
  "imports": [
    {
      "name": "vinicunca:imports",
      "plugins": [
        "import",
        "vinicunca"
      ],
      "rules": [
        {
          "level": "error",
          "meta": {
            "type": "problem",
            "docs": {
              "category": "Helpful warnings",
              "description": "Forbid any invalid exports, i.e. re-export of the same name.",
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/export.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/first.md"
            },
            "fixable": "code"
          },
          "name": "import/first",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "type": "layout",
            "docs": {
              "category": "Style guide",
              "description": "Enforce a newline after import statements.",
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md"
            },
            "fixable": "whitespace"
          },
          "name": "import/newline-after-import",
          "options": [
            {
              "considerComments": true,
              "count": 1
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "problem",
            "docs": {
              "category": "Style guide",
              "description": "Forbid repeated import of the same module in multiple places.",
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-duplicates.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-mutable-exports.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-default.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-self-import.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-webpack-loader-syntax.md"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/order.md"
            },
            "fixable": "code"
          },
          "name": "import/order",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Fix duplication in imports",
              "recommended": "strict",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/import-dedupe"
            },
            "fixable": "code",
            "type": "problem"
          },
          "name": "vinicunca/import-dedupe",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Prevent importing modules in `node_modules` folder by relative or absolute path",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-import-node-modules-by-path"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-import-node-modules-by-path",
          "options": []
        }
      ]
    }
  ],
  "unicorn": [
    {
      "name": "vinicunca:unicorn",
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/error-message.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/escape-case.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/no-instanceof-array.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/no-new-array.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/no-new-buffer.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/number-literal-case.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-dom-node-text-content.md"
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
              "description": "Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.",
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-includes.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-node-protocol.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-number-properties.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-string-starts-ends-with.md"
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
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/prefer-type-error.md"
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
              "description": "Require `new` when throwing an error.",
              "url": "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v51.0.1/docs/rules/throw-new-error.md"
            },
            "fixable": "code"
          },
          "name": "unicorn/throw-new-error",
          "options": []
        }
      ]
    }
  ],
  "typescript": [
    {
      "name": "vinicunca:typescript:setup",
      "plugins": [
        "ts",
        "vinicunca"
      ],
      "rules": []
    },
    {
      "files": [
        "**/*.?([cm])ts",
        "**/*.?([cm])tsx"
      ],
      "name": "vinicunca:typescript:type-aware-parser",
      "plugins": [],
      "rules": []
    },
    {
      "files": [
        "**/*.?([cm])[jt]s?(x)",
        "**/*.vue"
      ],
      "name": "vinicunca:typescript:parser",
      "plugins": [],
      "rules": []
    },
    {
      "files": [
        "**/*.?([cm])[jt]s?(x)",
        "**/*.vue"
      ],
      "name": "vinicunca:typescript:rules",
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
              "recommended": true,
              "url": "https://eslint.org/docs/latest/rules/no-new-symbol"
            }
          },
          "name": "no-new-symbol",
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
              "recommended": "recommended",
              "url": "https://typescript-eslint.io/rules/ban-ts-comment"
            },
            "hasSuggestions": true
          },
          "name": "ts/ban-ts-comment",
          "options": [
            {
              "ts-ignore": "allow-with-description"
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "Disallow certain types",
              "recommended": "recommended",
              "url": "https://typescript-eslint.io/rules/ban-types"
            },
            "fixable": "code",
            "hasSuggestions": true
          },
          "name": "ts/ban-types",
          "options": [
            {
              "types": {
                "Function": false
              }
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
          "level": "error",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Disallow literal numbers that lose precision",
              "recommended": "recommended",
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
              "extendsBaseRule": false,
              "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
            },
            "fixable": "code"
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
              "description": "Disallow `require` statements except in import statements",
              "recommended": "recommended",
              "url": "https://typescript-eslint.io/rules/no-var-requires"
            }
          },
          "name": "ts/no-var-requires",
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
            "type": "problem",
            "docs": {
              "description": "Enforce using `@ts-expect-error` over `@ts-ignore`",
              "recommended": "strict",
              "url": "https://typescript-eslint.io/rules/prefer-ts-expect-error"
            },
            "fixable": "code"
          },
          "name": "ts/prefer-ts-expect-error",
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
            "type": "problem",
            "docs": {
              "description": "Require explicit return types on functions and class methods",
              "url": "https://typescript-eslint.io/rules/explicit-function-return-type"
            }
          },
          "name": "ts/explicit-function-return-type",
          "options": []
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
              "recommended": "stylistic",
              "url": "https://typescript-eslint.io/rules/no-empty-interface"
            },
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
              "description": "Disallow invocation of `require()`",
              "url": "https://typescript-eslint.io/rules/no-require-imports"
            }
          },
          "name": "ts/no-require-imports",
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
        }
      ]
    },
    {
      "files": [
        "**/*.?([cm])ts",
        "**/*.?([cm])tsx"
      ],
      "name": "vinicunca:typescript:rules-type-aware",
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
          "level": "off",
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
            "type": "problem",
            "docs": {
              "description": "Disallow throwing literals as exceptions",
              "recommended": "strict",
              "extendsBaseRule": true,
              "requiresTypeChecking": true,
              "url": "https://typescript-eslint.io/rules/no-throw-literal"
            }
          },
          "name": "ts/no-throw-literal",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Require both operands of addition to be the same type and be `bigint`, `number`, or `string`",
              "recommended": "recommended",
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
              "recommended": "recommended",
              "requiresTypeChecking": true,
              "url": "https://typescript-eslint.io/rules/restrict-template-expressions"
            }
          },
          "name": "ts/restrict-template-expressions",
          "options": []
        }
      ]
    },
    {
      "files": [
        "**/*.d.ts"
      ],
      "name": "vinicunca:typescript:dts-overrides",
      "plugins": [],
      "rules": [
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "disallow `eslint-disable` comments without rule names",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html"
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
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-duplicates.md"
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
              "extendsBaseRule": false,
              "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
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
      "name": "vinicunca:typescript:tests-overrides",
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
      "name": "vinicunca:typescript:javascript-overrides",
      "plugins": [],
      "rules": [
        {
          "level": "off",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Disallow invocation of `require()`",
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
              "description": "Disallow `require` statements except in import statements",
              "recommended": "recommended",
              "url": "https://typescript-eslint.io/rules/no-var-requires"
            }
          },
          "name": "ts/no-var-requires",
          "options": []
        }
      ]
    }
  ],
  "stylistic": [
    {
      "name": "vinicunca:stylistic",
      "plugins": [
        "style",
        "vinicunca"
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
                "TemplateLiteral *",
                "JSXElement",
                "JSXElement > *",
                "JSXAttribute",
                "JSXIdentifier",
                "JSXNamespacedName",
                "JSXMemberExpression",
                "JSXSpreadAttribute",
                "JSXExpressionContainer",
                "JSXOpeningElement",
                "JSXClosingElement",
                "JSXFragment",
                "JSXOpeningFragment",
                "JSXClosingFragment",
                "JSXText",
                "JSXEmptyExpression",
                "JSXSpreadChild",
                "TSUnionType",
                "TSIntersectionType",
                "TSTypeParameterInstantiation",
                "FunctionExpression > .params[decorators.length > 0]",
                "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
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
              "recommended": "stylistic",
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "recommended": "stylistic",
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
              "recommended": "stylistic",
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
          "options": [
            "line-aligned"
          ]
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
              "children": "never",
              "props": "never"
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Enforce consistent linebreaks in curly braces in JSX attributes and expressions",
              "recommended": "stylistic",
              "url": "https://eslint.style/rules/jsx/jsx-curly-newline"
            },
            "fixable": "whitespace"
          },
          "name": "style/jsx-curly-newline",
          "options": [
            {
              "multiline": "consistent",
              "singleline": "consistent"
            }
          ]
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
            {
              "children": true,
              "spacing": {
                "objectLiterals": "never"
              },
              "when": "always"
            }
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
          "options": [
            "never"
          ]
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
          "options": [
            "multiline-multiprop"
          ]
        },
        {
          "level": "error",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Enforce JSX indentation",
              "url": "https://eslint.style/rules/jsx/jsx-indent"
            },
            "fixable": "whitespace"
          },
          "name": "style/jsx-indent",
          "options": [
            2
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
              "return": "parens-new-line"
            }
          ]
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
              "extendsBaseRule": true,
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
          "level": "off",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Enforce or disallow spaces inside of curly braces in JSX attributes and expressions",
              "url": "https://eslint.style/rules/jsx/jsx-child-element-spacing"
            }
          },
          "name": "style/jsx-child-element-spacing",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Require or prevent a new line after jsx elements and expressions.",
              "url": "https://eslint.style/rules/jsx/jsx-newline"
            },
            "fixable": "code"
          },
          "name": "style/jsx-newline",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Disallow multiple spaces between inline JSX props",
              "url": "https://eslint.style/rules/jsx/jsx-props-no-multi-spaces"
            },
            "fixable": "code"
          },
          "name": "style/jsx-props-no-multi-spaces",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Enforce props alphabetical sorting",
              "recommended": "stylistic",
              "url": "https://eslint.style/rules/jsx/jsx-sort-props"
            },
            "fixable": "code"
          },
          "name": "style/jsx-sort-props",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "layout",
            "docs": {
              "description": "Enforce consistent line breaks after opening and before closing braces",
              "url": "https://eslint.style/rules/js/object-curly-newline"
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
              "url": "https://eslint.style/rules/js/object-property-newline"
            },
            "fixable": "whitespace"
          },
          "name": "style/object-property-newline",
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
              "description": "Having line breaks styles to object, array and named imports",
              "recommended": "stylistic",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/consistent-list-newline"
            },
            "fixable": "whitespace",
            "type": "layout"
          },
          "name": "vinicunca/consistent-list-newline",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Newline after if",
              "recommended": "stylistic",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/if-newline"
            },
            "fixable": "whitespace",
            "type": "layout"
          },
          "name": "vinicunca/if-newline",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce top-level functions to be declared with function keyword",
              "recommended": "stylistic",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/top-level-function"
            },
            "fixable": "code",
            "type": "problem"
          },
          "name": "vinicunca/top-level-function",
          "options": []
        }
      ]
    }
  ],
  "test": [
    {
      "name": "vinicunca:test:setup",
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
      "name": "vinicunca:test:rules",
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
              "description": "Prefer test or it but not both",
              "recommended": "warn",
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
              "description": "Disallow identical titles",
              "recommended": "strict",
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
            "fixable": true
          },
          "name": "test/no-only-tests",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "type": "suggestion",
            "docs": {
              "description": "Prefer having hooks in consistent order",
              "recommended": "warn",
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
              "description": "Enforce lowercase titles",
              "recommended": "warn",
              "url": "https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md"
            },
            "fixable": "code"
          },
          "name": "test/prefer-lowercase-title",
          "options": []
        }
      ]
    }
  ],
  "vue": [
    {
      "name": "vinicunca:vue:setup",
      "plugins": [
        "vue"
      ],
      "rules": []
    },
    {
      "files": [
        "**/*.vue"
      ],
      "name": "vinicunca:vue:rules",
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential",
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "essential"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "strongly-recommended"
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
                "recommended"
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
                "recommended"
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
                "recommended"
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
                "recommended"
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
                "recommended"
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
                "recommended"
              ],
              "url": "https://eslint.vuejs.org/rules/order-in-components.html"
            },
            "fixable": "code"
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
                "recommended"
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": true,
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
                "url": "https://eslint.style/rules/js/object-curly-newline",
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
              "extendsBaseRule": true,
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
                "url": "https://eslint.style/rules/js/object-property-newline",
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
              "extendsBaseRule": true,
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
    }
  ],
  "react": [
    {
      "name": "vinicunca:react:setup",
      "plugins": [
        "react",
        "react-hooks"
      ],
      "rules": []
    },
    {
      "files": [
        "**/*.?([cm])jsx",
        "**/*.?([cm])tsx"
      ],
      "name": "vinicunca:react:rules",
      "plugins": [],
      "rules": [
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow missing displayName in a React component definition",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md"
            }
          },
          "name": "react/display-name",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow missing `key` props in iterators/collection literals",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md"
            }
          },
          "name": "react/jsx-key",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow comments from being inserted as text nodes",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md"
            }
          },
          "name": "react/jsx-no-comment-textnodes",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow duplicate properties in JSX",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md"
            }
          },
          "name": "react/jsx-no-duplicate-props",
          "options": [
            {
              "ignoreCase": true
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "fixable": "code",
            "docs": {
              "description": "Disallow `target=\"_blank\"` attribute without `rel=\"noreferrer\"`",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md"
            }
          },
          "name": "react/jsx-no-target-blank",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow undeclared variables in JSX",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md"
            }
          },
          "name": "react/jsx-no-undef",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow React to be incorrectly marked as unused",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md"
            }
          },
          "name": "react/jsx-uses-react",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow variables used in JSX to be incorrectly marked as unused",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md"
            }
          },
          "name": "react/jsx-uses-vars",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow passing of children as props",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md"
            }
          },
          "name": "react/no-children-prop",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow when a DOM element is using both children and dangerouslySetInnerHTML",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md"
            }
          },
          "name": "react/no-danger-with-children",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow usage of deprecated methods",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md"
            }
          },
          "name": "react/no-deprecated",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow direct mutation of this.state",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md"
            }
          },
          "name": "react/no-direct-mutation-state",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow usage of findDOMNode",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md"
            }
          },
          "name": "react/no-find-dom-node",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow usage of isMounted",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md"
            }
          },
          "name": "react/no-is-mounted",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow usage of the return value of ReactDOM.render",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md"
            }
          },
          "name": "react/no-render-return-value",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow using string references",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md"
            }
          },
          "name": "react/no-string-refs",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow unescaped HTML entities from appearing in markup",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md"
            }
          },
          "name": "react/no-unescaped-entities",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow usage of unknown DOM property",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md"
            },
            "fixable": "code"
          },
          "name": "react/no-unknown-property",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow usage of unsafe lifecycle methods",
              "category": "Best Practices",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md"
            }
          },
          "name": "react/no-unsafe",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow missing props validation in a React component definition",
              "category": "Best Practices",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md"
            }
          },
          "name": "react/prop-types",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow missing React when using JSX",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md"
            }
          },
          "name": "react/react-in-jsx-scope",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce ES5 or ES6 class for returning value in render function",
              "category": "Possible Errors",
              "recommended": true,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md"
            }
          },
          "name": "react/require-render-return",
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
          "level": "off",
          "meta": {
            "docs": {
              "category": "Stylistic Issues",
              "description": "Enforces consistent naming for boolean props",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md"
            }
          },
          "name": "react/boolean-prop-naming",
          "options": [
            {
              "message": "",
              "propTypeNames": [
                "bool",
                "mutuallyExclusiveTrueProps"
              ],
              "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce consistent usage of destructuring assignment of props, state, and context",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md"
            },
            "fixable": "code"
          },
          "name": "react/destructuring-assignment",
          "options": [
            "always"
          ]
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce boolean attributes notation in JSX",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md"
            },
            "fixable": "code"
          },
          "name": "react/jsx-boolean-value",
          "options": [
            "never",
            {
              "always": []
            }
          ]
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Enforce JSX maximum depth",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md"
            }
          },
          "name": "react/jsx-max-depth",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Disallow usage of string literals in JSX",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md"
            }
          },
          "name": "react/jsx-no-literals",
          "options": [
            {
              "noStrings": true
            }
          ]
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce PascalCase for user-defined JSX components",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md"
            }
          },
          "name": "react/jsx-pascal-case",
          "options": [
            {
              "allowAllCaps": true,
              "ignore": []
            }
          ]
        },
        {
          "level": "off",
          "meta": {
            "deprecated": true,
            "replacedBy": [
              "sort-default-props"
            ],
            "docs": {
              "description": "Enforce defaultProps declarations alphabetical sorting",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md"
            }
          },
          "name": "react/jsx-sort-default-props",
          "options": [
            {
              "ignoreCase": true
            }
          ]
        },
        {
          "level": "warn",
          "meta": {
            "docs": {
              "description": "Disallow usage of dangerous JSX properties",
              "category": "Best Practices",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md"
            }
          },
          "name": "react/no-danger",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Disallow extra closing tags for components without children",
              "category": "Stylistic Issues",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md"
            },
            "fixable": "code"
          },
          "name": "react/self-closing-comp",
          "options": []
        },
        {
          "level": "error",
          "meta": {
            "docs": {
              "description": "Enforce style prop value is an object",
              "category": "Possible Errors",
              "recommended": false,
              "url": "https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md"
            }
          },
          "name": "react/style-prop-object",
          "options": []
        }
      ]
    }
  ],
  "jsonc": [
    {
      "name": "vinicunca:jsonc:setup",
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
      "name": "vinicunca:jsonc:rules",
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
    }
  ],
  "sort-package-json": [
    {
      "files": [
        "**/package.json"
      ],
      "name": "vinicunca:sort-package-json",
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
            }
          ]
        }
      ]
    }
  ],
  "sort-tsconfig": [
    {
      "files": [
        "**/tsconfig.json",
        "**/tsconfig.*.json"
      ],
      "name": "vinicunca:sort-tsconfig",
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
    }
  ],
  "yaml": [
    {
      "name": "vinicunca:yaml:setup",
      "plugins": [
        "yaml"
      ],
      "rules": []
    },
    {
      "files": [
        "**/*.y?(a)ml"
      ],
      "name": "vinicunca:yaml:rules",
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
    }
  ],
  "markdown": [
    {
      "name": "vinicunca:markdown:setup",
      "plugins": [
        "markdown"
      ],
      "rules": []
    },
    {
      "files": [
        "**/*.md"
      ],
      "name": "vinicunca:markdown:processor",
      "plugins": [],
      "rules": []
    },
    {
      "files": [
        "**/*.md"
      ],
      "name": "vinicunca:markdown:parser",
      "plugins": [],
      "rules": []
    },
    {
      "files": [
        "**/*.md/**/*.?([cm])[jt]s?(x)",
        "**/*.md/**/*.vue"
      ],
      "name": "vinicunca:markdown:disables",
      "plugins": [],
      "rules": [
        {
          "level": "off",
          "meta": {
            "type": "layout",
            "docs": {
              "category": "Style guide",
              "description": "Enforce a newline after import statements.",
              "url": "https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md"
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
              "extendsBaseRule": true,
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
              "extendsBaseRule": false,
              "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
            },
            "fixable": "code"
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
            "type": "problem",
            "docs": {
              "description": "Disallow `require` statements except in import statements",
              "recommended": "recommended",
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
              "extendsBaseRule": false,
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
              "extendsBaseRule": false,
              "url": "https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md"
            },
            "fixable": "code"
          },
          "name": "unused-imports/no-unused-vars",
          "options": []
        },
        {
          "level": "off",
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
          "level": "off",
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
          "options": []
        },
        {
          "level": "off",
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
          "level": "off",
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
          "level": "off",
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
          "level": "off",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Disallow throwing literals as exceptions",
              "recommended": "strict",
              "extendsBaseRule": true,
              "requiresTypeChecking": true,
              "url": "https://typescript-eslint.io/rules/no-throw-literal"
            }
          },
          "name": "ts/no-throw-literal",
          "options": []
        },
        {
          "level": "off",
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
          "level": "off",
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
          "level": "off",
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
          "level": "off",
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
          "level": "off",
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
          "level": "off",
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
          "level": "off",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Require both operands of addition to be the same type and be `bigint`, `number`, or `string`",
              "recommended": "recommended",
              "requiresTypeChecking": true,
              "url": "https://typescript-eslint.io/rules/restrict-plus-operands"
            }
          },
          "name": "ts/restrict-plus-operands",
          "options": []
        },
        {
          "level": "off",
          "meta": {
            "type": "problem",
            "docs": {
              "description": "Enforce template literal expressions to be of `string` type",
              "recommended": "recommended",
              "requiresTypeChecking": true,
              "url": "https://typescript-eslint.io/rules/restrict-template-expressions"
            }
          },
          "name": "ts/restrict-template-expressions",
          "options": []
        },
        {
          "level": "off",
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
        },
        {
          "level": "off",
          "meta": {
            "docs": {
              "description": "Do not use `exports =`",
              "recommended": "recommended",
              "url": "https://eslint.vinicunca.dev/plugin-vinicunca/no-ts-export-equal"
            },
            "type": "problem"
          },
          "name": "vinicunca/no-ts-export-equal",
          "options": []
        }
      ]
    }
  ],
  "formatters": [
    {
      "name": "vinicunca:formatters:setup",
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
      "name": "vinicunca:formatters:css",
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
      "name": "vinicunca:formatters:scss",
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
      "name": "vinicunca:formatters:less",
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
      "name": "vinicunca:formatters:html",
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
        "**/*.md"
      ],
      "name": "vinicunca:formatters:markdown",
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
        "**/*.graphql"
      ],
      "name": "vinicunca:formatters:graphql",
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
  ]
})
  