import * as parse from '@@/src/parse/index';
import { assert, assertNot } from '@/assertions/base';

/*
 * Asserts the value is "truthy" (differs from the Javascript definition).
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - 1
 * - on
 * - yes
 * - y
 */
export function assertsIsTruthy(value: unknown) {
  assert(() => parse.isTruthy(value), `value is not considered truthy: ${String(value)}`);
}

/*
 * Asserts the value is not "truthy" (differs from the Javascript definition).
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - 1
 * - on
 * - yes
 * - y
 */
export function assertsIsNotTruthy(value: unknown) {
  assertNot(() => parse.isTruthy(value), `value is considered truthy: ${String(value)}`);
}

/*
 * Asserts the value is "falsy" (differs from the Javascript definition).
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - 0
 * - -1
 * - off
 * - no
 * - n
 */
export function assertsIsFalsy(value: unknown) {
  assert(() => parse.isFalsy(value), `value is not considered falsy: ${String(value)}`);
}

/*
 * Asserts the value is not "falsy" (differs from the Javascript definition).
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - 0
 * - -1
 * - off
 * - no
 * - n
 */
export function assertsIsNotFalsy(value: unknown) {
  assertNot(() => parse.isFalsy(value), `value is considered falsy: ${String(value)}`);
}

/*
 * Asserts the value is "nullish".
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 */
export function assertsIsNullish(value: unknown) {
  assert(() => parse.isNullish(value), `value is not considered nullish: ${String(value)}`);
}

/*
 * Asserts the value is not "nullish".
 *
 * This includes everything except what can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 */
export function assertsIsNotNullish(value: unknown) {
  assertNot(() => parse.isNullish(value), `value is considered nullish: ${String(value)}`);
}
