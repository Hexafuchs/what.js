import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a regexp.
 */
export function assertIsRegExp(object: unknown): asserts object is RegExp {
  assertIs(types.isRegExp, object, 'regexp');
}

/**
 * Asserts the object is a regexp or null.
 */
export function assertIsRegExpOrNull(object: unknown): asserts object is RegExp | null {
  assertIs(obj => types.isNull(obj) || types.isRegExp(obj), object, 'regexp or null');
}

/**
 * Asserts the object is not a regexp.
 */
export function assertIsNotRegExp<T>(object: T | RegExp): asserts object is T {
  assertIsNot(types.isRegExp, object, 'regexp');
}
