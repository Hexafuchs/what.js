import { assertIs, assertIsNot } from '../../base';
import { isNull, isObject } from '../../../types';

/**
 * Asserts the object is an object.
 *
 * Even though null is counted as an object by Javascript, this function returns false for null values.
 * To check for null as well, use `assertIsObjectOrNull`.
 *
 * If you want to check for Date, Error, Object, Map, Set, Regexp or Promise, there are special methods for this.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsObject(object: unknown): asserts object is NonNullable<object> {
  assertIs(isObject, object, 'object');
}

/**
 * Asserts the object is an object or null.
 *
 * If you want to check for Date, Error, Object, Map, Set, Regexp or Promise, there are special methods for this.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsObjectOrNull(object: unknown): asserts object is object | null {
  assertIs(obj => isNull(obj) || isObject(obj), object, 'object or null');
}

/**
 * Asserts the object is not an object.
 *
 * If you want to check for Date, Error, Object, Map, Set, Regexp or Promise, there are special methods for this.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotObject<T>(object: T | object): asserts object is T {
  assertIsNot(isObject, object, 'object');
}
