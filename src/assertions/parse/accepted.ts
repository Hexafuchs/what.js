import { assert, assertNot } from '@/assertions/base';
import { isAccepted, isDeclined, isMissing } from '@@/src';

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
 * @group Assertions
 * @category Parse
 */
export function assertIsAccepted(value: unknown) {
  assert(() => isAccepted(value), `value is not considered accepted: ${String(value)}`);
}

/**
 * @alias {@link assertIsAccepted}
 */
export const assertIsYes = assertIsAccepted;
/**
 * @alias {@link assertIsAccepted}
 */
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
 * @group Assertions
 * @category Parse
 */
export function assertIsNotAccepted(value: unknown) {
  assertNot(() => isAccepted(value), `value is considered accepted: ${String(value)}`);
}

/**
 * @alias {@link assertIsNotAccepted}
 */
export const assertIsNotYes = assertIsNotAccepted;
/**
 * @alias {@link assertIsNotAccepted}
 */
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
 * @group Assertions
 * @category Parse
 */
export function assertIsDeclined(value: unknown) {
  assert(() => isDeclined(value), `value is not considered declined: ${String(value)}`);
}

/**
 * @alias {@link assertIsDeclined}
 */
export const assertIsNo = assertIsDeclined;
/**
 * @alias {@link assertIsDeclined}
 */
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
 * @group Assertions
 * @category Parse
 */
export function assertIsNotDeclined(value: unknown) {
  assertNot(() => isDeclined(value), `value is considered declined: ${String(value)}`);
}

/**
 * @alias {@link assertIsNotDeclined}
 */
export const assertIsNotNo = assertIsNotDeclined;
/**
 * @alias {@link assertIsNotDeclined}
 */
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
 * @group Assertions
 * @category Parse
 */
export function assertIsMissing(value: unknown) {
  assert(() => isMissing(value), `value is not considered missing: ${String(value)}`);
}

/**
 * @alias {@link assertIsMissing}
 */
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
 * @group Assertions
 * @category Parse
 */
export function assertIsNotMissing(value: unknown) {
  assertNot(() => isMissing(value), `value is considered missing: ${String(value)}`);
}

/**
 * @alias {@link assertIsNotMissing}
 */
export const assertIsNotNullish = assertIsNotMissing;
