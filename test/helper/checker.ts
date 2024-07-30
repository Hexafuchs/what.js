import { expect, it } from 'vitest';

export function testIs(method: (value: unknown) => boolean, tests: Array<[string, unknown, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(method(test[1])).toBe(test[2]);
    });
  }
}

export function testIsNot(method: (value: unknown) => boolean, tests: Array<[string, unknown, boolean]>) {
  for (const test of tests) {
    it("should be " + (!test[2] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(method(test[1])).toBe(!test[2]);
    });
  }
}

export function testHas<T>(method: (haystack: unknown, needle: T) => boolean, tests: Array<[string, unknown, T, boolean]>) {
  for (const test of tests) {
    it("should be " + (test[3] ? 'positive' : 'negative') + " about " + test[0], () => {
      expect(method(test[1], test[2])).toBe(test[3]);
    });
  }
}
