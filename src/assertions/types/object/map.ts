import { assertIs, assertIsNot } from '../../base';
import { isMap, isNull } from '../../../types';

/**
 * Asserts the object is a map.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsMap(object: unknown): asserts object is Map<unknown, unknown> {
  assertIs(isMap, object, 'map');
}

/**
 * Asserts the object is a map or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsMapOrNull(object: unknown): asserts object is Map<unknown, unknown> | null {
  assertIs(obj => isNull(obj) || isMap(obj), object, 'map or null');
}

/**
 * Asserts the object is not a map.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotMap<T>(object: T | Map<unknown, unknown>): asserts object is T {
  assertIsNot(isMap, object, 'map');
}
