import { isEmpty, isNotEmpty } from '@@/src';
import { assert } from '@/assertions/base';

/**
 * Asserts the object is considered empty.
 *
 * This includes:
 * - null
 * - undefined
 * - false
 * - 0 or 0.0
 * - empty array []
 * - empty object {}
 *
 * @group Assertions
 * @category State
 */
export function assertIsEmpty(object: unknown) {
  assert(() => isEmpty(object), `object is not considered empty: ${String(object)}`);
}

/**
 * Asserts the object is not considered empty.
 *
 * This includes everything except:
 * - null
 * - undefined
 * - false
 * - 0 or 0.0
 * - empty array []
 * - empty object {}
 *
 * @group Assertions
 * @category State
 */
export function assertIsNotEmpty(object: unknown) {
  assert(() => isNotEmpty(object), `object is considered empty: ${String(object)}`);
}
