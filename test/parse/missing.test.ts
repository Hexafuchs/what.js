import { describe } from "vitest";
import {
  assertIsMissing,
  assertIsNotMissing, assertIsNotNullish, assertIsNullish,
  isMissing, isNullish
} from "../../src";
import { testIs } from '../helper/checker';
import { testAssertIs, testAssertIsNot } from '../helper/assertions';

const baseTests: Array<[string, unknown, boolean]> = [
  ["YES", "YES", false],
  ["yes", "yes", false],
  ["y", "y", false],
  ["true (string)", "true", false],
  ["t", "t", false],
  ["on", "on", false],
  ["1 (string)", "1", false],
  ["1", 1, false],
  ["true", true, false],
  ["NO", "NO", false],
  ["no", "no", false],
  ["n", "n", false],
  ["false (string)", "false", false],
  ["f", "f", false],
  ["off", "off", false],
  ["0 (string)", "0", false],
  ["-1 (string)", "-1", false],
  ["0", 0, false],
  ["-1", -1, false],
  ["false", false, false],
  ["NULL (string)", "NULL", true],
  ["null (string)", "null", true],
  ["undefined (string)", "undefined", true],
  ["none", "none", true],
  ["empty string", "", true],
  ["null", null, true],
  ["undefined", undefined, true],
];

describe("missing checker", () => {
  testIs(isMissing, baseTests);
  testIs(isNullish, baseTests);
});

describe("missing assertions", () => {
  testAssertIs(assertIsMissing, baseTests);
  testAssertIs(assertIsNullish, baseTests);
  testAssertIsNot(assertIsNotMissing, baseTests);
  testAssertIsNot(assertIsNotNullish, baseTests);
});
