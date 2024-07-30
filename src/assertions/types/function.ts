/* eslint-disable @typescript-eslint/ban-types */
import * as types from '@@/src/types/index';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a function.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsFunction(object: unknown): asserts object is Function {
  assertIs(types.isFunction, object, 'function');
}

/**
 * Asserts the object is a function or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsFunctionOrNull(object: unknown): asserts object is Function | null {
  assertIs(obj => types.isNull(obj) || types.isFunction(obj), object, 'function or null');
}

/**
 * Asserts the object is not a function.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotFunction<T>(object: T | Function): asserts object is T {
  assertIsNot(types.isFunction, object, 'function');
}
