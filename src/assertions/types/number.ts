import { assertIs, assertIsNot } from '../base';
import { isBigInt, isNull, isNumber, isNumericPrimitive } from '../../types';

/**
 * Asserts the object is a number.
 *
 * This does not include BigInt.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumber(object: unknown): asserts object is number {
  assertIs(isNumber, object, 'number');
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
  assertIs(obj => isNull(obj) || isNumber(obj), object, 'number or null');
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
  assertIsNot(isNumber, object, 'number');
}

/**
 * Asserts the object is a bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBigInt(object: unknown): asserts object is bigint {
  assertIs(isBigInt, object, 'bigint');
}

/**
 * Asserts the object is a bigint or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBigIntOrNull(object: unknown): asserts object is bigint | null {
  assertIs(obj => isNull(obj) || isBigInt(obj), object, 'bigint or null');
}

/**
 * Asserts the object is not a bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotBigInt<T>(object: T | bigint): asserts object is T {
  assertIsNot(isBigInt, object, 'bigint');
}

/**
 * Asserts the object is a number or bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumericPrimitive(object: unknown): asserts object is number | bigint {
  assertIs(isNumericPrimitive, object, 'number or bigint');
}

/**
 * Asserts the object is a number, bigint or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNumericPrimitiveOrNull(object: unknown): asserts object is number | bigint | null {
  assertIs(obj => isNull(obj) || isNumericPrimitive(obj), object, 'number, bigint or null');
}

/**
 * Asserts the object is not a number or bigint.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotNumericPrimitive<T>(object: T | bigint | number): asserts object is T {
  assertIsNot(isNumericPrimitive, object, 'number or bigint');
}
