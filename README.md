# A library to get information about variables

[![Latest Version on NPM](https://img.shields.io/npm/v/%40hexafuchs%2Fwhat.js?style=flat-square)](https://www.npmjs.com/package/@hexafuchs/what.js)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/hexafuchs/what.js/testing.yml?branch=main&label=tests&style=flat-square)](https://github.com/hexafuchs/what.js/actions?query=workflow%3A"Run+Tests"+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/hexafuchs/what.js/linting.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/hexafuchs/what.js/actions?query=workflow%3A"Run+Formatter"+branch%3Amain)
[![Monthly Downloads](https://img.shields.io/npm/dm/%40hexafuchs%2Fwhat.js?style=flat-square)](hhttps://www.npmjs.com/package/@hexafuchs/what.js)

This package is meant to provide helpers to handle data with unknown or ambiguous types in both Javascript and
Typescript, providing both boolean return types and Typescript assertions. It also provides some additional helpers to
handle common use cases, like checking if a variable is "empty", has a certain function, has a special meaning, etc.

## Documentation

## Installation

You can install the package via npm (or another tool of your choosing):

```bash
npm install @hexafuchs/what.js
```

## Usage

Checkout the documentation at [https://hexafuchs.github.io/what.js/](https://hexafuchs.github.io/what.js/).

```typescript
import { isNull } from "@hexafuchs/what.js";

console.log(isNull(null));
```

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
