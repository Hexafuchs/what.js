import { describe } from "vitest";
import {
  assertIsAccepted,
  assertIsNotAccepted, assertIsNotOn, assertIsNotYes, assertIsOn, assertIsYes,
  isAccepted, isOn, isYes
} from "../../src";
import { testIs } from '../helper/checker';
import { testAssertIs, testAssertIsNot } from '../helper/assertions';

const baseTests: Array<[string, unknown, boolean]> = [
  ["YES", "YES", true],
  ["yes", "yes", true],
  ["y", "y", true],
  ["true (string)", "true", true],
  ["t", "t", true],
  ["on", "on", true],
  ["1 (string)", "1", true],
  ["1", 1, true],
  ["true", true, true],
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
  ["NULL (string)", "NULL", false],
  ["null (string)", "null", false],
  ["undefined (string)", "undefined", false],
  ["none", "none", false],
  ["empty string", "", false],
  ["null", null, false],
  ["undefined", undefined, false],
];

describe("accepted checker", () => {
  testIs(isAccepted, baseTests);
  testIs(isYes, baseTests);
  testIs(isOn, baseTests);
});

describe("accepted assertions", () => {
  testAssertIs(assertIsAccepted, baseTests);
  testAssertIs(assertIsOn, baseTests);
  testAssertIs(assertIsYes, baseTests);
  testAssertIsNot(assertIsNotAccepted, baseTests);
  testAssertIsNot(assertIsNotOn, baseTests);
  testAssertIsNot(assertIsNotYes, baseTests);
});
