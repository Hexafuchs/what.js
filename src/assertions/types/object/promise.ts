import { assertIs, assertIsNot } from '../../base';
import { isNull, isPromise } from '../../../types';

/**
 * Asserts the object is a promise.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsPromise(object: unknown): asserts object is Promise<unknown> {
  assertIs(isPromise, object, 'promise');
}

/**
 * Asserts the object is a promise or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsPromiseOrNull(object: unknown): asserts object is Promise<unknown> | null {
  assertIs(obj => isNull(obj) || isPromise(obj), object, 'promise or null');
}

/**
 * Asserts the object is not a promise.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotPromise<T>(object: T | Promise<unknown>): asserts object is T {
  assertIsNot(isPromise, object, 'promise');
}
