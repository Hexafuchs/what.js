import { describe, expect, it } from "vitest";
import { isPresent, isNotPresent } from "../../src";

const tests = [
  ["null", null, false, true],
  ["undefined", undefined, false, true],
  ["true", true, true, false],
  ["false", false, true, false],
  ["empty string", "", true, false],
  ["non-empty string", "hello", true, false],
  ["zero", 0, true, false],
  ["positive integer", 42, true, false],
  ["negative integer", -42, true, false],
  ["zero float", 0.0, true, false],
  ["positive float", 42.0, true, false],
  ["negative float", -42.0, true, false],
  ["functions", () => {}, true, false],
  ["empty arrays", [], true, false],
  ["non-empty arrays", [42], true, false],
  ["empty objects", {}, true, false],
  ["non-empty objects", {'hello': 'world'}, true, false],
]

describe("isPresent", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isPresent(test[1])).toBe(test[2]);
      expect(isNotPresent(test[1])).toBe(test[3]);
    });
  }
});
