import { assert, describe, expect, it } from "vitest";
import {
  assertContainsKey,
  assertHasNotKey,
  assertHasKey,
  assertNotContainsKey,
  containsKey,
  hasKey
} from "../../src";
import { AssertionError } from 'node:assert';

const baseTests: Array<[string, Record<string, number>|Map<number, number>, number, boolean]> = [
  ["empty objects", {}, 42, false],
  ["non-empty objects", {1: 42}, 1, true],
  ["non-empty objects", {1: 42}, 42, false],
  ["empty maps", new Map, 42, false],
  ["non-empty maps", new Map([[42, 1]]), 42, true],
  ["non-empty maps",  new Map([[42, 1]]), 43, false],
]

describe("contains key checker", () => {
  for (const test of baseTests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      expect(containsKey(test[1], test[2])).toBe(test[3]);
      expect(hasKey(test[1], test[2])).toBe(test[3]);
    });
  }
});

describe("contains key assertions", () => {
  for (const test of baseTests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0] + ' with values ' + test[2], () => {
      if (test[3]) {
        assert.doesNotThrow(() => assertContainsKey(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertHasKey(test[1], test[2]), AssertionError);
        assert.throws(() => assertNotContainsKey(test[1], test[2]), AssertionError);
        assert.throws(() => assertHasNotKey(test[1], test[2]), AssertionError);
      } else {
        assert.throws(() => assertContainsKey(test[1], test[2]), AssertionError);
        assert.throws(() => assertHasKey(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertNotContainsKey(test[1], test[2]), AssertionError);
        assert.doesNotThrow(() => assertHasNotKey(test[1], test[2]), AssertionError);
      }
    });
  }
});

