import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is undefined.
 */
export function assertIsUndefined(object: unknown): asserts object is undefined {
  assertIs(types.isUndefined, object, 'undefined');
}

/**
 * Asserts the object is not undefined.
 */
export function assertIsNotUndefined<T>(object: T | undefined): asserts object is T {
  assertIsNot(types.isUndefined, object, 'undefined');
}
