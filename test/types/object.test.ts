import { describe, expect, it } from "vitest";
import {isObject} from "../../src";

const tests = [
  ["null", null, false, false],
  ["undefined", undefined, false, false],
  ["true", true, false, false],
  ["false", false, false, false],
  ["empty string", "", false, false],
  ["non-empty string", "hello", false, false],
  ["zero", 0, false, false],
  ["positive integer", 42, false, false],
  ["negative integer", -42, false, false],
  ["zero float", 0.0, false, false],
  ["positive float", 42.0, false, false],
  ["negative float", -42.0, false, false],
  ["functions", () => {}, false, false],
  ["empty arrays", [], false, true],
  ["non-empty arrays", [42], false, true],
  ["empty objects", {}, true, true],
  ["non-empty objects", {'hello': 'world'}, true, true],
]

describe("isObject", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isObject(test[1])).toBe(test[2]);
      expect(isObject(test[1], true)).toBe(test[3]);
    });
  }
});