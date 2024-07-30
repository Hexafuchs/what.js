import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a boolean.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBoolean(object: unknown): asserts object is boolean {
  assertIs(types.isBoolean, object, 'boolean');
}

/**
 * Asserts the object is a boolean or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsBooleanOrNull(object: unknown): asserts object is boolean | null {
  assertIs(obj => types.isNull(obj) || types.isBoolean(obj), object, 'boolean or null');
}

/**
 * Asserts the object is not a boolean.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotBoolean<T>(object: T | boolean): asserts object is T {
  assertIsNot(types.isBoolean, object, 'boolean');
}
