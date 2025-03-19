import { assertIs, assertIsNot } from '../base';
import { isNull } from '../../types';

/**
 * Asserts the object is null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNull(object: unknown): asserts object is null {
  assertIs(isNull, object, 'null');
}

/**
 * Asserts the object is not null.
 *
 * @group Assertions
 * @category Type
 */
export function assertIsNotNull<T>(object: T | null): asserts object is T {
  assertIsNot(isNull, object, 'null');
}
