import { describe, expect, it } from "vitest";
import {isObject} from "../../../src";

const tests = [
  ["null", null, false],
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
  ["zero bigint", BigInt(0), false],
  ["big bigint", BigInt(9007199254740991), false],
  ["functions", () => {}, false],
  ["empty arrays", [], true],
  ["non-empty arrays", [42], true],
  ["empty objects", {}, true],
  ["non-empty objects", {'hello': 'world'}, true],
  ["empty sets", new Set, true],
  ["non-empty sets", new Set([4,4,2]), true],
  ["empty map", new Map, true],
  ["non-empty map", new Map([[1, 'hello'], [2, 'world']]), true],
  ["regexp", /helloworld/, true],
  ["promise", (async () => {})(), true],
  ["error", new Error, true],
  ["date", new Date, true],
]

describe("isObject", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isObject(test[1])).toBe(test[2]);
    });
  }
});
