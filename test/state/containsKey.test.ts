import { describe, expect, it } from "vitest";
import { containsKey } from "../../src";

const tests = [
  ["empty objects", {}, 'world', false],
  ["non-empty objects", {'hello': 'world'}, 'world', false],
  ["non-empty objects", {'hello': 'world'}, 'hello', true]
]

describe("containsValue", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      expect(containsKey((test[1] as Record<string, string>), (test[2] as string))).toBe(test[3]);
    });
  }
});