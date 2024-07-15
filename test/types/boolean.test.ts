import { describe, expect, it } from "vitest";
import {isBoolean} from "../../src";

const tests = [
  ["null", null, false],
  ["undefined", undefined, false],
  ["true", true, true],
  ["false", false, true],
  ["empty string", "", false],
  ["non-empty string", "hello", false],
  ["zero", 0, false],
  ["positive integer", 42, false],
  ["negative integer", -42, false],
  ["zero float", 0.0, false],
  ["positive float", 42.0, false],
  ["negative float", -42.0, false],
  ["functions", () => {}, false],
  ["empty arrays", [], false],
  ["non-empty arrays", [42], false],
  ["empty objects", {}, false],
  ["non-empty objects", {'hello': 'world'}, false],
]

describe("isBoolean", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(isBoolean(test[1])).toBe(test[2]);
    });
  }
});
