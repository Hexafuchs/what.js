import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a number.
 *
 * This does not include BigInt.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumber(object: unknown): asserts object is number {
  assertIs(types.isNumber, object, 'number');
}

/**
 * Asserts the object is a number or null.
 *
 * This does not include BigInt.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumberOrNull(object: unknown): asserts object is number | null {
  assertIs(obj => types.isNull(obj) || types.isNumber(obj), object, 'number or null');
}

/**
 * Asserts the object is not a number.
 *
 * This does not include BigInt.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotNumber<T>(object: T | number): asserts object is T {
  assertIsNot(types.isNumber, object, 'number');
}

/**
 * Asserts the object is a bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBigInt(object: unknown): asserts object is bigint {
  assertIs(types.isBigInt, object, 'bigint');
}

/**
 * Asserts the object is a bigint or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBigIntOrNull(object: unknown): asserts object is bigint | null {
  assertIs(obj => types.isNull(obj) || types.isBigInt(obj), object, 'bigint or null');
}

/**
 * Asserts the object is not a bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotBigInt<T>(object: T | bigint): asserts object is T {
  assertIsNot(types.isBigInt, object, 'bigint');
}

/**
 * Asserts the object is a number or bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumericPrimitive(object: unknown): asserts object is number | bigint {
  assertIs(types.isNumericPrimitive, object, 'number or bigint');
}

/**
 * Asserts the object is a number, bigint or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumericPrimitiveOrNull(object: unknown): asserts object is number | bigint | null {
  assertIs(obj => types.isNull(obj) || types.isNumericPrimitive(obj), object, 'number, bigint or null');
}

/**
 * Asserts the object is not a number or bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotNumericPrimitive<T>(object: T | bigint | number): asserts object is T {
  assertIsNot(types.isNumericPrimitive, object, 'number or bigint');
}
