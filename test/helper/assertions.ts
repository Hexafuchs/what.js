import { assert, it } from 'vitest';
import { AssertionError } from "../../src";

export function testAssertIs(method: (value: unknown) => void, tests: Array<[string, unknown, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      if (test[2]) {
        assert.doesNotThrow(() => method(test[1]), AssertionError);
      } else {
        assert.throws(() => method(test[1]), AssertionError);
      }
    });
  }
}

export function testAssertIsOrNull(method: (value: unknown) => void, tests: Array<[string, unknown, boolean]>) {
  for (const test of tests) {
    if (test[1] === null) {
      continue;
    }
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      if (test[2]) {
        assert.doesNotThrow(() => method(test[1]), AssertionError);
      } else {
        assert.throws(() => method(test[1]), AssertionError);
      }
    });
  }
  it("should be positive about null", () => {
    assert.doesNotThrow(() => method(null), AssertionError);
  });
}

export function testAssertIsNot(method: (value: unknown) => void, tests: Array<[string, unknown, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      if (test[2]) {
        assert.throws(() => method(test[1]), AssertionError);
      } else {
        assert.doesNotThrow(() => method(test[1]), AssertionError);
      }
    });
  }
}

export function testAssertHas<T>(method: (haystack: unknown, needle: T) => void, tests: Array<[string, unknown, T, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0], () => {
      if (test[3]) {
        assert.doesNotThrow(() => method(test[1], test[2]), AssertionError);
      } else {
        assert.throws(() => method(test[1], test[2]), AssertionError);
      }
    });
  }
}

export function testAssertHasNot<T>(method: (haystack: unknown, needle: T) => void, tests: Array<[string, unknown, T, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0], () => {
      if (test[3]) {
        assert.throws(() => method(test[1], test[2]), AssertionError);
      } else {
        assert.doesNotThrow(() => method(test[1], test[2]), AssertionError);
      }
    });
  }
}
