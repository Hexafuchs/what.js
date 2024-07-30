import { isString, isNull } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a string.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsString(object: unknown): asserts object is string {
  assertIs(isString, object, 'string');
}

/**
 * Asserts the object is a string or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsStringOrNull(object: unknown): asserts object is string | null {
  assertIs(obj => isNull(obj) || isString(obj), object, 'string or null');
}

/**
 * Asserts the object is not a string.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotString<T>(object: T | string): asserts object is T {
  assertIsNot(isString, object, 'string');
}
