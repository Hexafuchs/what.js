import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a map.
 */
export function assertIsMap(object: unknown): asserts object is Map<unknown, unknown> {
  assertIs(types.isMap, object, 'map');
}

/**
 * Asserts the object is a map or null.
 */
export function assertIsMapOrNull(object: unknown): asserts object is Map<unknown, unknown> | null {
  assertIs(obj => types.isNull(obj) || types.isMap(obj), object, 'map or null');
}

/**
 * Asserts the object is not a map.
 */
export function assertIsNotMap<T>(object: T | Map<unknown, unknown>): asserts object is T {
  assertIsNot(types.isMap, object, 'map');
}
