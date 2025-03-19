import { assertIs, assertIsNot } from '../../base';
import { isNull, isSet } from '../../../types';

/**
 * Asserts the object is a set.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsSet(object: unknown): asserts object is Set<unknown> {
  assertIs(isSet, object, 'set');
}

/**
 * Asserts the object is a set or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsSetOrNull(object: unknown): asserts object is Set<unknown> | null {
  assertIs(obj => isNull(obj) || isSet(obj), object, 'set or null');
}

/**
 * Asserts the object is not a set.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotSet<T>(object: T | Set<unknown>): asserts object is T {
  assertIsNot(isSet, object, 'set');
}
