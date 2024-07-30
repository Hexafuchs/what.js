import { describe } from "vitest";
import {
  assertHasNotFunction, assertHasFunction, hasFunction, assertDoesNotHaveFunction
} from "../../src";
import { testHas } from '../helper/checker';
import {
  testAssertHas,
  testAssertHasNot,
} from '../helper/assertions';

const baseTests: Array<[string, unknown, string, boolean]> = [
  ["null", null, "toString", false],
  ["null", null, "isVeryGreat", false],
  ["undefined", undefined, "toString", false],
  ["undefined", undefined, "isVeryGreat", false],
  ["true", true, "toString", true],
  ["true", true, "isVeryGreat", false],
  ["false", false, "toString", true],
  ["false", false, "isVeryGreat", false],
  ["empty string", "", "toString", true],
  ["empty string", "", "isVeryGreat", false],
  ["non-empty string", "hello", "toString", true],
  ["non-empty string", "hello", "isVeryGreat", false],
  ["zero", 0, "toString", true],
  ["zero", 0, "isVeryGreat", false],
  ["positive integer", 42, "toString", true],
  ["positive integer", 42, "isVeryGreat", false],
  ["negative integer", -42, "toString", true],
  ["negative integer", -42, "isVeryGreat", false],
  ["zero float", 0.0, "toString", true],
  ["zero float", 0.0, "isVeryGreat", false],
  ["positive float", 42.0, "toString", true],
  ["positive float", 42.0, "isVeryGreat", false],
  ["negative float", -42.0, "toString", true],
  ["negative float", -42.0, "isVeryGreat", false],
  ["zero bigint", BigInt(0), "toString", true],
  ["zero bigint", BigInt(0), "isVeryGreat", false],
  ["big bigint", BigInt(9007199254740991), "toString", true],
  ["big bigint", BigInt(9007199254740991), "isVeryGreat", false],
  ["functions", () => {}, "toString", true],
  ["functions", () => {}, "isVeryGreat", false],
  ["empty arrays", [], "toString", true],
  ["empty arrays", [], "isVeryGreat", false],
  ["non-empty arrays", [42], "toString", true],
  ["non-empty arrays", [42], "isVeryGreat", false],
  ["empty objects", {}, "toString", true],
  ["empty objects", {}, "isVeryGreat", false],
  ["non-empty objects", {'hello': 'world'}, "toString", true],
  ["non-empty objects", {'hello': 'world'}, "isVeryGreat", false],
  ["empty sets", new Set, "toString", true],
  ["empty sets", new Set, "isVeryGreat", false],
  ["non-empty sets", new Set([4,4,2]), "toString", true],
  ["non-empty sets", new Set([4,4,2]), "isVeryGreat", false],
  ["empty map", new Map, "toString", true],
  ["empty map", new Map, "isVeryGreat", false],
  ["non-empty map", new Map([[1, 'hello'], [2, 'world']]), "toString", true],
  ["non-empty map", new Map([[1, 'hello'], [2, 'world']]), "isVeryGreat", false],
  ["regexp", /helloworld/, "toString", true],
  ["regexp", /helloworld/, "isVeryGreat", false],
  ["promise", (async () => {})(), "toString", true],
  ["promise", (async () => {})(), "isVeryGreat", false],
  ["error", new Error, "toString", true],
  ["error", new Error, "isVeryGreat", false],
  ["date", new Date, "toString", true],
  ["date", new Date, "isVeryGreat", false],
];

describe("has function checker", () => {
  testHas(hasFunction, baseTests);
});

describe("has function assertions", () => {
  testAssertHas(assertHasFunction, baseTests);
  testAssertHasNot(assertHasNotFunction, baseTests);
  testAssertHasNot(assertDoesNotHaveFunction, baseTests);
});

