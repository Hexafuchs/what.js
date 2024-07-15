import { describe, expect, it } from "vitest";
import {isEmpty, isNotEmpty} from "../../src";

const tests = [
  ["null", null, true, false],
  ["undefined", undefined, true, false],
  ["true", true, false, true],
  ["false", false, true, false],
  ["empty string", "", true, false],
  ["non-empty string", "hello", false, true],
  ["zero", 0, true, false],
  ["positive integer", 42, false, true],
  ["negative integer", -42, false, true],
  ["zero float", 0.0, true, false],
  ["positive float", 42.0, false, true],
  ["negative float", -42.0, false, true],
  ["functions", () => {}, false, true],
  ["empty arrays", [], true, false],
  ["non-empty arrays", [42], false, true],
  ["empty objects", {}, true, false],
  ["non-empty objects", {'hello': 'world'}, false, true],
]

describe("isEmpty", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isEmpty(test[1])).toBe(test[2]);
      expect(isNotEmpty(test[1])).toBe(test[3]);
    });
  }
});