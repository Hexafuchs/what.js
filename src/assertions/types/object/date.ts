import { isDate, isNull } from '@@/src';
import { assertIs, assertIsNot } from '@/assertions/base';

/**
 * Asserts the object is a date.
 *
 * Keep in mind that Date.now() returns a number, not a date object.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsDate(object: unknown): asserts object is Date {
  assertIs(isDate, object, 'date');
}

/**
 * Asserts the object is a date or null.
 *
 * Keep in mind that Date.now() returns a number, not a date object.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsDateOrNull(object: unknown): asserts object is Date | null {
  assertIs(obj => isNull(obj) || isDate(obj), object, 'date or null');
}

/**
 * Asserts the object is not a date.
 *
 * Keep in mind that Date.now() returns a number, not a date object.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotDate<T>(object: T | Date): asserts object is T {
  assertIsNot(isDate, object, 'date');
}
