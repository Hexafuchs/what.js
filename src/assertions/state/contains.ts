import * as state from '@@/src/state/index';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the object or array contains the given value.
 */
export function assertContainsValue(arrayOrObject: Array<unknown> | Record<string, unknown>, value: unknown) {
  assert(() => state.containsValue(arrayOrObject, value), `array or object does not contain value: ${String(value)}`);
}

/**
 * Asserts the object or array does not contain the given value.
 */
export function assertNotContainsValue(arrayOrObject: Array<unknown> | Record<string, unknown>, value: unknown) {
  assertNot(
    () => state.containsValue(arrayOrObject, value),
    `array or object does not contain value: ${String(value)}`
  );
}
