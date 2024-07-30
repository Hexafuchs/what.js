import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is an error.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsError(object: unknown): asserts object is Error {
  assertIs(types.isError, object, 'error');
}

/**
 * Asserts the object is an error or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsErrorOrNull(object: unknown): asserts object is Error | null {
  assertIs(obj => types.isNull(obj) || types.isError(obj), object, 'error or null');
}

/**
 * Asserts the object is not an error.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotError<T>(object: T | Error): asserts object is T {
  assertIsNot(types.isError, object, 'error');
}
