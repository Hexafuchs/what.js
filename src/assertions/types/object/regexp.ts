import { isRegExp, isNull } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a regexp.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsRegExp(object: unknown): asserts object is RegExp {
  assertIs(isRegExp, object, 'regexp');
}

/**
 * Asserts the object is a regexp or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsRegExpOrNull(object: unknown): asserts object is RegExp | null {
  assertIs(obj => isNull(obj) || isRegExp(obj), object, 'regexp or null');
}

/**
 * Asserts the object is not a regexp.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotRegExp<T>(object: T | RegExp): asserts object is T {
  assertIsNot(isRegExp, object, 'regexp');
}
