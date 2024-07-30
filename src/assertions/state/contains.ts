import * as state from '@@/src/state/index';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the object or array contains the given value.
 */
export function assertContainsValue<T>(container: Array<T> | Record<string, T> | Set<T> | Map<unknown, T>, value: T) {
  assert(() => state.containsValue(container, value), `array or object does not contain value: ${String(value)}`);
}

/**
 * Asserts the object or array does not contain the given value.
 */
export function assertNotContainsValue<T>(container: Array<T> | Record<string, T>, value: T) {
  assertNot(() => state.containsValue(container, value), `array or object does not contain value: ${String(value)}`);
}
