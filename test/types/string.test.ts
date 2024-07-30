import { describe } from 'vitest';
import { testAssertIs, testAssertIsNot, testAssertIsOrNull } from '../helper/assertions';
import { isString, assertIsNotString, assertIsString, assertIsStringOrNull } from '../../src';
import { testIs } from '../helper/checker';

const baseTests: Array<[string, unknown, boolean]> = [
  ["null", null, false],
  ["undefined", undefined, false],
  ["true", true, false],
  ["false", false, false],
  ["empty string", "", true],
  ["non-empty string", "hello", true],
  ["zero", 0, false],
  ["positive integer", 42, false],
  ["negative integer", -42, false],
  ["zero float", 0.0, false],
  ["positive float", 42.0, false],
  ["negative float", -42.0, false],
  ["zero bigint", BigInt(0), false],
  ["big bigint", BigInt(9007199254740991), false],
  ["functions", () => {}, false],
  ["empty arrays", [], false],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, false],
  ["non-empty objects", {'hello': 'world'}, false],
  ["empty sets", new Set, false],
  ["non-empty sets", new Set([4,4,2]), false],
  ["empty map", new Map, false],
  ["non-empty map", new Map([[1, 'hello'], [2, 'world']]), false],
  ["regexp", /helloworld/, false],
  ["promise", (async () => {})(), false],
  ["error", new Error, false],
  ["date", new Date, false],
];

describe("string checker", () => {
  testIs(isString, baseTests);
});

describe("string assertions", () => {
  testAssertIs(assertIsString, baseTests);
  testAssertIsNot(assertIsNotString, baseTests);
  testAssertIsOrNull(assertIsStringOrNull, baseTests);
});
