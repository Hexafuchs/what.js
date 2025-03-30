import { describe } from "vitest";
import {
  assertIsNumeric,
  assertIsNotNumeric,
  isNumeric
} from "../../src";
// @ts-ignore
import { testIs, testAssertIs, testAssertIsNot } from '../helper';

const baseTests: Array<[string, unknown, boolean]> = [
  ["zero (string)", "0", true],
  ["zero", 0, true],
  ["positive integer (string)", "42", true],
  ["positive integer", 42, true],
  ["negative integer (string)", "-42", true],
  ["negative integer", -42, true],
  ["zero float (string)", "0.0", true],
  ["zero float", 0.0, true],
  ["positive float (string)", "42.0", true],
  ["positive float", 42.0, true],
  ["negative float (string)", "-42.0", true],
  ["negative float", -42.0, true],
  ["zero bigint", BigInt(0), true],
  ["big bigint", BigInt(9007199254740991), true],
  ["two commas", "1.1.1", false],
  ["empty string", "", false],
  ["text string", "hello", false],
  ["text and number string", "hello42", false],
  ["null", null, false],
  ["undefined", undefined, false],
  ["true", true, false],
  ["false", false, false],
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

describe("numeric checker", () => {
  testIs(isNumeric, baseTests);
});

describe("numeric assertions", () => {
  testAssertIs(assertIsNumeric, baseTests);
  testAssertIsNot(assertIsNotNumeric, baseTests);
});
