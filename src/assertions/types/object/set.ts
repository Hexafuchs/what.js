import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a set.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsSet(object: unknown): asserts object is Set<unknown> {
  assertIs(types.isSet, object, 'set');
}

/**
 * Asserts the object is a set or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsSetOrNull(object: unknown): asserts object is Set<unknown> | null {
  assertIs(obj => types.isNull(obj) || types.isSet(obj), object, 'set or null');
}

/**
 * Asserts the object is not a set.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotSet<T>(object: T | Set<unknown>): asserts object is T {
  assertIsNot(types.isSet, object, 'set');
}
