import { describe } from "vitest";
import { assertIsEmpty, assertIsNotEmpty, isEmpty, isNotEmpty } from "../../src";
// @ts-ignore
import { testIs, testIsNot, testAssertIs, testAssertIsNot } from '../helper';

const baseTests: Array<[string, unknown, boolean]> = [
  ["null", null, true],
  ["undefined", undefined, true],
  ["true", true, false],
  ["false", false, true],
  ["empty string", "", true],
  ["non-empty string", "hello", false],
  ["zero", 0, true],
  ["positive integer", 42, false],
  ["negative integer", -42, false],
  ["zero float", 0.0, true],
  ["positive float", 42.0, false],
  ["negative float", -42.0, false],
  ["functions", () => {}, false],
  ["empty arrays", [], true],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, true],
  ["non-empty objects", {'hello': 'world'}, false],
  ["empty sets", new Set, true],
  ["non-empty sets", new Set([4,4,2]), false],
  ["empty map", new Map, true],
  ["non-empty map", new Map([[1, 'hello'], [2, 'world']]), false],
  ["regexp", /helloworld/, false],
  ["promise", (async () => {})(), false],
  ["error", new Error, false],
  ["date", new Date, false],
];

describe("empty checker", () => {
  testIs(isEmpty, baseTests);
  testIsNot(isNotEmpty, baseTests);
});

describe("empty assertions", () => {
  testAssertIs(assertIsEmpty, baseTests);
  testAssertIsNot(assertIsNotEmpty, baseTests);
});
