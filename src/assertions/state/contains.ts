import { assert, assertNot } from '../base';
import { containsKey, containsValue } from '../../state';

/**
 * Asserts the object or array contains the given value.
 *
 * Supports maps and sets.
 *
 * @group Assertions
 * @category State
 */
export function assertContainsValue<T>(container: Array<T> | Record<string, T> | Set<T> | Map<unknown, T>, value: T) {
  assert(() => containsValue(container, value), `array or object does not contain value: ${String(value)}`);
}

/**
 * @alias {@link assertContainsValue}
 */
export const assertHasValue = assertContainsValue;

/**
 * Asserts the object or array does not contain the given value.
 *
 * Supports maps and sets.
 *
 * @group Assertions
 * @category State
 */
export function assertNotContainsValue<T>(
  container: Array<T> | Record<string, T> | Set<T> | Map<unknown, T>,
  value: T
) {
  assertNot(() => containsValue(container, value), `array or object does not contain value: ${String(value)}`);
}

/**
 * @alias {@link assertNotContainsValue}
 */
export const assertHasNotValue = assertNotContainsValue;

/**
 * Asserts the object contains the given key.
 *
 * Supports maps.
 *
 * @group Assertions
 * @category State
 */
export function assertContainsKey<T>(container: Record<string, unknown> | Map<T, unknown>, key: string | T) {
  assert(() => containsKey(container, key), `array or object does not contain key: ${String(key)}`);
}

/**
 * @alias {@link assertContainsKey}
 */
export const assertHasKey = assertContainsKey;

/**
 * Asserts the object or array does not contain the given key.
 *
 * Supports maps.
 *
 * @group Assertions
 * @category State
 */
export function assertNotContainsKey<T>(container: Record<string, unknown> | Map<T, unknown>, key: string | T) {
  assertNot(() => containsKey(container, key), `array or object does not contain key: ${String(key)}`);
}

/**
 * @alias {@link assertNotContainsKey}
 */
export const assertHasNotKey = assertNotContainsKey;
