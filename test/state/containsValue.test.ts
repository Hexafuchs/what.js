import { describe, expect, it } from "vitest";
import { containsValue } from "../../src";

const testsArrays = [
  ["empty arrays", [], 42, false],
  ["non-empty arrays", [42], 42, true],
  ["non-empty arrays", [42], 43, false]
]

const testsObjects = [
  ["empty objects", {}, 'world', false],
  ["non-empty objects", {'hello': 'world'}, 'world', true],
  ["non-empty objects", {'hello': 'world'}, 'hello', false]
]

describe("containsValue", () => {
  for (const test of testsArrays) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      expect(containsValue((test[1] as Array<number>), test[2])).toBe(test[3]);
    });
  }
  for (const test of testsObjects) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      expect(containsValue((test[1] as Record<string, string>), test[2])).toBe(test[3]);
    });
  }

});