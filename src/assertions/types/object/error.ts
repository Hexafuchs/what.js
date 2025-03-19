import { assertIs, assertIsNot } from '../../base';
import { isError, isNull } from '../../../types';

/**
 * Asserts the object is an error.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsError(object: unknown): asserts object is Error {
  assertIs(isError, object, 'error');
}

/**
 * Asserts the object is an error or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsErrorOrNull(object: unknown): asserts object is Error | null {
  assertIs(obj => isNull(obj) || isError(obj), object, 'error or null');
}

/**
 * Asserts the object is not an error.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotError<T>(object: T | Error): asserts object is T {
  assertIsNot(isError, object, 'error');
}
