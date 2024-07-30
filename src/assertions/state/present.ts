import { isNotPresent, isPresent } from '@@/src';
import { assert } from '@/assertions/base';

/**
 * Asserts the object is not null or undefined.
 *
 * @alias assertIsPresent
 *
 * @group Assertions
 * @category State
 */
export function assertIsPresent(object: unknown): asserts object is NonNullable<unknown> {
  assert(() => isPresent(object), `object is not considered present: ${String(object)}`);
}

/**
 * Asserts the object is null or undefined.
 *
 * @group Assertions
 * @category State
 */
export function assertIsNotPresent(object: unknown): asserts object is null | undefined {
  assert(() => isNotPresent(object), `object is considered present: ${String(object)}`);
}
