import { describe } from "vitest";
import {
  assertIsBigInt, assertIsBigIntOrNull,
  assertIsNotBigInt,
  assertIsNotNumber, assertIsNotNumericPrimitive,
  assertIsNumber,
  assertIsNumberOrNull, assertIsNumericPrimitive, assertIsNumericPrimitiveOrNull,
  isBigInt,
  isNumber, isNumericPrimitive
} from "../../src";
import { testIs } from '../helper/checker';
import { testAssertIs, testAssertIsNot, testAssertIsOrNull } from '../helper/assertions';

const numberTests: Array<[string, unknown, boolean]> = [
  ["undefined", undefined, false],
  ["true", true, false],
  ["false", false, false],
  ["empty string", "", false],
  ["non-empty string", "hello", false],
  ["zero", 0, true],
  ["positive integer", 42, true],
  ["negative integer", -42, true],
  ["zero float", 0.0, true],
  ["positive float", 42.0, true],
  ["negative float", -42.0, true],
  ["zero bigint", BigInt(0), false],
  ["big bigint", BigInt(9007199254740991), false],
  ["functions", () => {}, false],
  ["empty arrays", [], false],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, false],
  ["non-empty objects", {'hello': 'world'}, false],
]

describe("number checker", () => {
  testIs(isNumber, numberTests);
});

describe("number assertions", () => {
  testAssertIs(assertIsNumber, numberTests);
  testAssertIsNot(assertIsNotNumber, numberTests);
  testAssertIsOrNull(assertIsNumberOrNull, numberTests);
});


const bigintTests: Array<[string, unknown, boolean]> = [
  ["undefined", undefined, false],
  ["true", true, false],
  ["false", false, false],
  ["empty string", "", false],
  ["non-empty string", "hello", false],
  ["zero", 0, false],
  ["positive integer", 42, false],
  ["negative integer", -42, false],
  ["zero float", 0.0, false],
  ["positive float", 42.0, false],
  ["negative float", -42.0, false],
  ["zero bigint", BigInt(0), true],
  ["big bigint", BigInt(9007199254740991), true],
  ["functions", () => {}, false],
  ["empty arrays", [], false],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, false],
  ["non-empty objects", {'hello': 'world'}, false],
]

describe("bigint checker", () => {
  testIs(isBigInt, bigintTests);
});

describe("bigint assertions", () => {
  testAssertIs(assertIsBigInt, bigintTests);
  testAssertIsNot(assertIsNotBigInt, bigintTests);
  testAssertIsOrNull(assertIsBigIntOrNull, bigintTests);
});


const numericTests: Array<[string, unknown, boolean]> = [
  ["undefined", undefined, false],
  ["true", true, false],
  ["false", false, false],
  ["empty string", "", false],
  ["non-empty string", "hello", false],
  ["zero", 0, true],
  ["positive integer", 42, true],
  ["negative integer", -42, true],
  ["zero float", 0.0, true],
  ["positive float", 42.0, true],
  ["negative float", -42.0, true],
  ["zero bigint", BigInt(0), true],
  ["big bigint", BigInt(9007199254740991), true],
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
]

describe("numeric primitive checker", () => {
  testIs(isNumericPrimitive, numericTests);
});

describe("numeric primitive assertions", () => {
  testAssertIs(assertIsNumericPrimitive, numericTests);
  testAssertIsNot(assertIsNotNumericPrimitive, numericTests);
  testAssertIsOrNull(assertIsNumericPrimitiveOrNull, numericTests);
});
