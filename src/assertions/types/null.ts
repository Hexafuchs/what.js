import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is null.
 */
export function assertIsNull(object: unknown): asserts object is null {
  assertIs(types.isNull, object, 'null');
}

/**
 * Asserts the object is not null.
 */
export function assertIsNotNull<T>(object: T | null): asserts object is T {
  assertIsNot(types.isNull, object, 'null');
}
