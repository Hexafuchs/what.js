import * as state from '@@/src/state/index';
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
  assert(() => state.isPresent(object), `object is not considered present: ${String(object)}`);
}

/**
 * Asserts the object is null or undefined.
 *
 * @group Assertions
 * @category State
 */
export function assertIsNotPresent(object: unknown): asserts object is null | undefined {
  assert(() => state.isNotPresent(object), `object is considered present: ${String(object)}`);
}
