import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a promise.
 */
export function assertIsPromise(object: unknown): asserts object is Promise<unknown> {
  assertIs(types.isPromise, object, 'promise');
}

/**
 * Asserts the object is a promise or null.
 */
export function assertIsPromiseOrNull(object: unknown): asserts object is Promise<unknown> | null {
  assertIs(obj => types.isNull(obj) || types.isPromise(obj), object, 'promise or null');
}

/**
 * Asserts the object is not a promise.
 */
export function assertIsNotPromise<T>(object: T | Promise<unknown>): asserts object is T {
  assertIsNot(types.isPromise, object, 'promise');
}
