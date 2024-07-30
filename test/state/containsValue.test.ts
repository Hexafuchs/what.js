import { assert, describe, expect, it } from "vitest";
import {
  assertContainsValue, assertHasNotValue, assertHasValue, assertNotContainsValue,
  containsValue,
  hasValue,
  AssertionError
} from "../../src";

const baseTests: Array<[string, Record<string, number>|Array<number>|Set<number>|Map<number, number>, number, boolean]> = [
  ["empty arrays", [], 42, false],
  ["non-empty arrays", [42], 42, true],
  ["non-empty arrays", [42], 43, false],
  ["empty objects", {}, 42, false],
  ["non-empty objects", {1: 42}, 42, true],
  ["non-empty objects", {1: 42}, 1, false],
  ["empty sets", new Set, 42, false],
  ["non-empty sets", new Set([42]), 42, true],
  ["non-empty sets", new Set([42]), 43, false],
  ["empty maps", new Map, 42, false],
  ["non-empty maps", new Map([[1, 42]]), 42, true],
  ["non-empty maps",  new Map([[1, 42]]), 43, false],
]

describe("contains value checker", () => {
  for (const test of baseTests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      expect(containsValue(test[1], test[2])).toBe(test[3]);
      expect(hasValue(test[1], test[2])).toBe(test[3]);
    });
  }
});

describe("contains value assertions", () => {
  for (const test of baseTests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      if (test[3]) {
        assert.doesNotThrow(() => assertContainsValue(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertHasValue(test[1], test[2]), AssertionError);
        assert.throws(() => assertNotContainsValue(test[1], test[2]), AssertionError);
        assert.throws(() => assertHasNotValue(test[1], test[2]), AssertionError);
      } else {
        assert.throws(() => assertContainsValue(test[1], test[2]), AssertionError);
        assert.throws(() => assertHasValue(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertNotContainsValue(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertHasNotValue(test[1], test[2]), AssertionError);
      }
    });
  }
});
