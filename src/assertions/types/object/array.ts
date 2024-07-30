import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is an array.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsArray(object: unknown): asserts object is Array<unknown> {
  assertIs(types.isArray, object, 'array');
}

/**
 * Asserts the object is an array or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsArrayOrNull(object: unknown): asserts object is Array<unknown> | null {
  assertIs(obj => types.isNull(obj) || types.isArray(obj), object, 'array or null');
}

/**
 * Asserts the object is not an array.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotArray<T>(object: T | Array<unknown>): asserts object is T {
  assertIsNot(types.isArray, object, 'array');
}
