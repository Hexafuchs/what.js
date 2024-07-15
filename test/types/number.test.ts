import { describe, expect, it } from "vitest";
import { isNumber } from "../../src";

const tests = [
  ["null", null, false],
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
  ["functions", () => {}, false],
  ["empty arrays", [], false],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, false],
  ["non-empty objects", {'hello': 'world'}, false],
]

describe("isNumber", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isNumber(test[1])).toBe(test[2]);
    });
  }
});
