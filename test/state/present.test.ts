import { describe } from "vitest";
import {
  isPresent,
  isNotPresent,
  assertIsPresent, assertIsNotPresent
} from "../../src";
import { testIs, testIsNot } from '../helper/checker';
import { testAssertIs, testAssertIsNot } from '../helper/assertions';

const baseTests: Array<[string, unknown, boolean]> = [
  ["null", null, false],
  ["undefined", undefined, false],
  ["true", true, true],
  ["false", false, true],
  ["empty string", "", true],
  ["non-empty string", "hello", true],
  ["zero", 0, true],
  ["positive integer", 42, true],
  ["negative integer", -42, true],
  ["zero float", 0.0, true],
  ["positive float", 42.0, true],
  ["negative float", -42.0, true],
  ["functions", () => {}, true],
  ["empty arrays", [], true],
  ["non-empty arrays", [42], true],
  ["empty objects", {}, true],
  ["non-empty objects", {'hello': 'world'}, true],
];

describe("present checker", () => {
  testIs(isPresent, baseTests);
  testIsNot(isNotPresent, baseTests);
});

describe("present assertions", () => {
  testAssertIs(assertIsPresent, baseTests);
  testAssertIsNot(assertIsNotPresent, baseTests);
});
