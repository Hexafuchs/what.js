# Changelog

All notable changes to `what.js` will be documented in this file.

## v2.0.0 - 2025-03-30

### Migration

- Support for cjs and iief has been dropped for now.
  - If you are interested in re-adding it, feel free to get in contact.
- Please check your import paths. While no features were added or removed, some paths are not up to date anymore, especially anything containing 'src'

**Full Changelog**: https://github.com/Hexafuchs/what.js/compare/v1.0.2...v2.0.0

## v1.0.2 - 2025-03-19

### What's Changed

- Updated dependencies
- Removed non-relative paths

**Full Changelog**: https://github.com/Hexafuchs/what.js/compare/v1.0.1...v1.0.2

## v1.0.1 - 2024-08-08

### What's Changed

- Replaced dts generator
- Replaced node:assert with own assertion error
- Replaced `import * as` with destructuring imports

#### On The Side

- Updated workflows
- Updated development packages
- Updated configuration files

**Full Changelog**: https://github.com/Hexafuchs/what.js/compare/v1.0.0...v1.0.1

## v1.0.0 - 2024-07-30

### What's Changed

- renamed isSet and isNotSet to isPresent and isNotPresent to prevent clashes with the Set data type
- fixed bugs with isEmpty/isNotEmpty and added support for sets and maps
- removed special treatment of arrays in isObject
- reorganized folder structure

### What's New

- added isAccepted, isDenied, isMissing and isNumeric, which check if the value is likely meant to be interpreted, like "true" as string probably should be interpreted as boolean for config values
- added containsValue and containsKey for objects, maps, sets, and arrays
- added hasFunction to check if a variable has a function
- added isSet, isMap, isDate, isRegExp, isError and isPromise (all special cases of an object)
- added isBigInt and isNumericPrimitive to support BigInt
- added Typescript safe guards where applicable
- added versions of every function as Assertion, with Typescript CFA support if applicable
- added function aliases

### On The Side

- added proper documentation
- improved docstrings
- 100% coverage in every category of vitest

**Full Changelog**: https://github.com/Hexafuchs/what.js/compare/v0.1.3...v1.0.0

## v0.1.3 - 2024-07-14

### What's Changed

- Fixed issue with npm publish workflow

**Full Changelog**: https://github.com/Hexafuchs/what.js/compare/v0.1.1...v0.1.3
