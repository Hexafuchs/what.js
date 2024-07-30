import { describe } from "vitest";
import {
  assertIsDeclined, assertIsNo,
  assertIsNotDeclined, assertIsNotNo, assertIsNotOff, assertIsOff,
  isDeclined, isNo, isOff
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
  ["NO", "NO", true],
  ["no", "no", true],
  ["n", "n", true],
  ["false (string)", "false", true],
  ["f", "f", true],
  ["off", "off", true],
  ["0 (string)", "0", true],
  ["-1 (string)", "-1", true],
  ["0", 0, true],
  ["-1", -1, true],
  ["false", false, true],
  ["NULL (string)", "NULL", false],
  ["null (string)", "null", false],
  ["undefined (string)", "undefined", false],
  ["none", "none", false],
  ["empty string", "", false],
  ["null", null, false],
  ["undefined", undefined, false],
];

describe("declined checker", () => {
  testIs(isDeclined, baseTests);
  testIs(isNo, baseTests);
  testIs(isOff, baseTests);
});

describe("declined assertions", () => {
  testAssertIs(assertIsDeclined, baseTests);
  testAssertIs(assertIsNo, baseTests);
  testAssertIs(assertIsOff, baseTests);
  testAssertIsNot(assertIsNotDeclined, baseTests);
  testAssertIsNot(assertIsNotNo, baseTests);
  testAssertIsNot(assertIsNotOff, baseTests);
});
