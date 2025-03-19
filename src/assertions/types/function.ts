/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { assertIs, assertIsNot } from '../base';
import { isFunction, isNull } from '../../types';

/**
 * Asserts the object is a function.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsFunction(object: unknown): asserts object is Function {
  assertIs(isFunction, object, 'function');
}

/**
 * Asserts the object is a function or null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsFunctionOrNull(object: unknown): asserts object is Function | null {
  assertIs(obj => isNull(obj) || isFunction(obj), object, 'function or null');
}

/**
 * Asserts the object is not a function.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotFunction<T>(object: T | Function): asserts object is T {
  assertIsNot(isFunction, object, 'function');
}
