import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a number.
 *
 * This does not include BigInt.
 */
export function assertIsNumber(object: unknown): asserts object is number {
  assertIs(types.isNumber, object, 'number');
}

/**
 * Asserts the object is a number or null.
 *
 * This does not include BigInt.
 */
export function assertIsNumberOrNull(object: unknown): asserts object is number | null {
  assertIs(obj => types.isNull(obj) || types.isNumber(obj), object, 'number or null');
}

/**
 * Asserts the object is not a number.
 *
 * This does not include BigInt.
 */
export function assertIsNotNumber<T>(object: T | number): asserts object is T {
  assertIsNot(types.isNumber, object, 'number');
}

/**
 * Asserts the object is a bigint.
 */
export function assertIsBigInt(object: unknown): asserts object is bigint {
  assertIs(types.isBigInt, object, 'bigint');
}

/**
 * Asserts the object is a bigint or null.
 */
export function assertIsBigIntOrNull(object: unknown): asserts object is bigint | null {
  assertIs(obj => types.isNull(obj) || types.isBigInt(obj), object, 'bigint or null');
}

/**
 * Asserts the object is not a bigint.
 */
export function assertIsNotBigInt<T>(object: T | bigint): asserts object is T {
  assertIsNot(types.isBigInt, object, 'bigint');
}
