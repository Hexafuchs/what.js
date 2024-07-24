import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a string.
 */
export function assertIsString(object: unknown): asserts object is string {
  assertIs(types.isString, object, 'string');
}

/**
 * Asserts the object is a string or null.
 */
export function assertIsStringOrNull(object: unknown): asserts object is string | null {
  assertIs(obj => types.isNull(obj) || types.isString(obj), object, 'string or null');
}

/**
 * Asserts the object is not a string.
 */
export function assertIsNotString<T>(object: T | string): asserts object is T {
  assertIsNot(types.isString, object, 'string');
}
