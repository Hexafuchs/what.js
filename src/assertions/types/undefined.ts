import { isUndefined } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is undefined.
 *
 * @alias assertIsUndefined
 *
 * @group Assertions
 * @category Type
 */
export function assertIsUndefined(object: unknown): asserts object is undefined {
  assertIs(isUndefined, object, 'undefined');
}

/**
 * @alias {@link assertIsUndefined}
 */
export const assertIsNotDefined = assertIsUndefined;

/**
 * Asserts the object is not undefined.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotUndefined<T>(object: T | undefined): asserts object is T {
  assertIsNot(isUndefined, object, 'undefined');
}

/**
 * @alias {@link assertIsNotUndefined}
 */
export const assertIsDefined = assertIsNotUndefined;
