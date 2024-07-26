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
 * @alias assertsIsAccepted
 */
export function assertsIsAccepted(value: unknown) {
  assert(() => parse.isAccepted(value), `value is not considered accepted: ${String(value)}`);
}

export const assertsIsYes = assertsIsAccepted;
export const assertsIsOn = assertsIsAccepted;

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
 * @alias assertsIsNotAccepted
 */
export function assertsIsNotAccepted(value: unknown) {
  assertNot(() => parse.isAccepted(value), `value is considered accepted: ${String(value)}`);
}

export const assertsIsNotYes = assertsIsNotAccepted;
export const assertsIsNotOn = assertsIsNotAccepted;

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
 * @alias assertsIsDeclined
 */
export function assertsIsDeclined(value: unknown) {
  assert(() => parse.isDeclined(value), `value is not considered declined: ${String(value)}`);
}

export const assertsIsNo = assertsIsDeclined;
export const assertsIsOff = assertsIsDeclined;

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
 * @alias assertsIsNotDeclined
 */
export function assertsIsNotDeclined(value: unknown) {
  assertNot(() => parse.isDeclined(value), `value is considered declined: ${String(value)}`);
}

export const assertsIsNotNo = assertsIsNotDeclined;
export const assertsIsNotOff = assertsIsNotDeclined;

/**
 * Asserts the value is considered missing.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 *
 * @alias assertsIsMissing
 */
export function assertsIsMissing(value: unknown) {
  assert(() => parse.isMissing(value), `value is not considered missing: ${String(value)}`);
}

export const assertsIsNullish = assertsIsMissing;

/**
 * Asserts the value is not considered missing.
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 *
 * @alias assertsIsNotMissing
 */
export function assertsIsNotMissing(value: unknown) {
  assertNot(() => parse.isMissing(value), `value is considered missing: ${String(value)}`);
}

export const assertsIsNotNullish = assertsIsNotMissing;
