import { isBoolean, isNull } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a boolean.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBoolean(object: unknown): asserts object is boolean {
  assertIs(isBoolean, object, 'boolean');
}

/**
 * Asserts the object is a boolean or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBooleanOrNull(object: unknown): asserts object is boolean | null {
  assertIs(obj => isNull(obj) || isBoolean(obj), object, 'boolean or null');
}

/**
 * Asserts the object is not a boolean.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotBoolean<T>(object: T | boolean): asserts object is T {
  assertIsNot(isBoolean, object, 'boolean');
}
