import { isArray, isNull } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is an array.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsArray(object: unknown): asserts object is Array<unknown> {
  assertIs(isArray, object, 'array');
}

/**
 * Asserts the object is an array or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsArrayOrNull(object: unknown): asserts object is Array<unknown> | null {
  assertIs(obj => isNull(obj) || isArray(obj), object, 'array or null');
}

/**
 * Asserts the object is not an array.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotArray<T>(object: T | Array<unknown>): asserts object is T {
  assertIsNot(isArray, object, 'array');
}
