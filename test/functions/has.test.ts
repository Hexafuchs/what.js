import { describe, expect, it } from "vitest";
import { hasFunction } from "../../src";

const tests = [
  ["4", 4, 'toString', true],
  ["4", 4, 'toSomethingElse', false],
  ["true", true, 'toString', true],
  ["true", true, 'toSomethingElse', false],
  ["false", false, 'toString', true],
  ["false", false, 'toSomethingElse', false],
  ["undefined", undefined, 'toString', false],
  ["undefined", undefined, 'toSomethingElse', false],
  ["null", null, 'toString', false],
  ["null", null, 'toSomethingElse', false],
  ["empty string", "", 'toString', true],
  ["empty string", "", 'toSomethingElse', false],
  ["non-empty string", "hello", 'toString', true],
  ["non-empty string", "hello", 'toSomethingElse', false],
  ["zero", 0, 'toString', true],
  ["zero", 0, 'toSomethingElse', false],
  ["positive integer", 42, 'toString', true],
  ["positive integer", 42, 'toSomethingElse', false],
  ["negative integer", -42, 'toString', true],
  ["negative integer", -42, 'toSomethingElse', false],
  ["zero float", 0.0, 'toString', true],
  ["zero float", 0.0, 'toSomethingElse', false],
  ["positive float", 42.0, 'toString', true],
  ["positive float", 42.0, 'toSomethingElse', false],
  ["negative float", -42.0, 'toString', true],
  ["negative float", -42.0, 'toSomethingElse', false],
  ["zero float", 0.0, 'toString', true],
  ["zero float", 0.0, 'toSomethingElse', false],
  ["functions", () => {}, 'toString', true],
  ["functions", () => {}, 'toSomethingElse', false],
  ["empty arrays", [], 'toString', true],
  ["empty arrays", [], 'toSomethingElse', false],
  ["non-empty arrays", [42], 'toString', true],
  ["non-empty arrays", [42], 'toSomethingElse', false],
  ["zero float", 0.0, 'toString', true],
  ["zero float", 0.0, 'toSomethingElse', false],
  ["empty objects", {}, 'toString', true],
  ["empty objects", {}, 'toSomethingElse', false],
  ["non-empty objects", {'toSomethingElse': 'world'}, 'toString', true],
  ["non-empty objects", {'toSomethingElse': () => {}}, 'toSomethingElse', true],
]

describe("hasFunction", () => {
  for (const test of tests) {
    it("should be " + (test[2] ? 'positive' : 'negative') + " about " + test[0] + ' and function ' + test[2], () => {
      expect(hasFunction(test[1], (test[2] as string))).toBe(test[3]);
    });
  }
});
