# A library to get information about variables

[![Latest Version on NPM](https://img.shields.io/npm/v/%40hexafuchs%2Fwhat.js?style=flat-square)](https://www.npmjs.com/package/@hexafuchs/what.js)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/hexafuchs/what.js/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/hexafuchs/what.js/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/hexafuchs/what.js/fix-ts-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/hexafuchs/what.js/actions?query=workflow%3A"Fix+Typescript+code+style+issues"+branch%3Amain)
[![Monthly Downloads](https://img.shields.io/npm/dm/%40hexafuchs%2Fwhat.js?style=flat-square)](hhttps://www.npmjs.com/package/@hexafuchs/what.js)

This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via npm (or another tool of your choosing):

```bash
npm install @hexafuchs/what.js
```

## Usage

```typescript
import { isNull } from "@hexafuchs/what.js";

console.log(isNull(null));
```

### Functions

| Name                                 | Description                                                                                              |
|--------------------------------------|----------------------------------------------------------------------------------------------------------|
| isNull(obj)                          | Check if variable is null                                                                                |
| isUndefined(obj)                     | Check if variable is undefined                                                                           |
| isNumber(obj)                        | Check if variable is a number (integer or float)                                                         |
| isString(obj)                        | Check if variable is a string                                                                            |
| isObject(obj, includeArrays = false) | Check if variable is an object, set seconds parameter to true to include arrays. Null is never included. |
| isArray(obj)                         | Check if variable is an array                                                                            |
| isBoolean(obj)                       | Check if variable is a boolean                                                                           |
| isFunction(obj)                      | Check if variable is a function                                                                          |
| isSet(obj)                           | Check if variable is not null nor undefined                                                              |
| isNotSet(obj)                        | Inverted version of isSet                                                                                |
| isEmpty(obj)                         | Check if variable is null, undefined, false. zero, an empty string, an empty array, or an empty object   |
| isNotEmpty(obj)                      | Inverted version of isEmpty                                                                              |

## Testing

```bash
npm run test
```

## Development

### Building

```bash
npm run build
```

### Dev Server

```bash
npm run dev
```

### Run linter

```bash
npm run lint:scripts
npm run lint:styles
```

## Changelog

Please see [CHANGELOG](https://github.com/Hexafuchs/what.js/blob/main/CHANGELOG.md) for more information on what has changed recently.

## License

The MIT License (MIT). Please see [License File](https://github.com/Hexafuchs/what.js/blob/main/LICENSE.md) for more information.
