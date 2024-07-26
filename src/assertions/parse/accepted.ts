import * as parse from '@@/src/parse/index';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the value is a value that expresses acceptance.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - yes
 * - y
 * - on
 * - 1
 *
 * @alias assertIsAccepted
 */
export function assertIsAccepted(value: unknown) {
  assert(() => parse.isAccepted(value), `value is not considered accepted: ${String(value)}`);
}

export const assertIsYes = assertIsAccepted;
export const assertIsOn = assertIsAccepted;

/**
 * Asserts the value is a value that doesn't express acceptance.
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - yes
 * - y
 * - on
 * - 1
 *
 * @alias assertIsNotAccepted
 */
export function assertIsNotAccepted(value: unknown) {
  assertNot(() => parse.isAccepted(value), `value is considered accepted: ${String(value)}`);
}

export const assertIsNotYes = assertIsNotAccepted;
export const assertIsNotOn = assertIsNotAccepted;

/**
 * Asserts the value is a value that expresses decline.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - no
 * - n
 * - off
 * - 0
 * - -1
 *
 * @alias assertIsDeclined
 */
export function assertIsDeclined(value: unknown) {
  assert(() => parse.isDeclined(value), `value is not considered declined: ${String(value)}`);
}

export const assertIsNo = assertIsDeclined;
export const assertIsOff = assertIsDeclined;

/**
 * Asserts the value is a value that doesn't express decline.
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - no
 * - n
 * - off
 * - 0
 * - -1
 *
 * @alias assertIsNotDeclined
 */
export function assertIsNotDeclined(value: unknown) {
  assertNot(() => parse.isDeclined(value), `value is considered declined: ${String(value)}`);
}

export const assertIsNotNo = assertIsNotDeclined;
export const assertIsNotOff = assertIsNotDeclined;

/**
 * Asserts the value is considered missing.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 *
 * @alias assertIsMissing
 */
export function assertIsMissing(value: unknown) {
  assert(() => parse.isMissing(value), `value is not considered missing: ${String(value)}`);
}

export const assertIsNullish = assertIsMissing;

/**
 * Asserts the value is not considered missing.
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 *
 * @alias assertIsNotMissing
 */
export function assertIsNotMissing(value: unknown) {
  assertNot(() => parse.isMissing(value), `value is considered missing: ${String(value)}`);
}

export const assertIsNotNullish = assertIsNotMissing;
