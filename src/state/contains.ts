import { isArray, isObject, isSet, isMap } from '@@/src';

/**
 * Returns whether the object or array contains the given value.
 *
 * Supports maps and sets.
 *
 * @group Checker
 * @category State
 */
export const containsValue = <T>(
  container: Array<T> | Record<string, T> | Set<T> | Map<unknown, T>,
  value: T
): boolean => {
  return (
    (isArray(container) && container.indexOf(value) !== -1) ||
    (isSet(container) && container.has(value)) ||
    (isMap(container) && Array.from(container.values()).indexOf(value) !== -1) ||
    (isArray(container) && container.indexOf(value) !== -1) ||
    (isObject(container) && Object.values(container).indexOf(value) !== -1)
  );
};

/**
 * @alias {@link containsValue}
 */
export const hasValue = containsValue;

/**
 * Returns whether the object contains the given key.
 *
 * Supports maps.
 *
 * Converts key to string before checking if it is a member of the object.
 *
 * @group Checker
 * @category State
 */
export const containsKey = <T>(container: Record<string, unknown> | Map<T, unknown>, key: T): boolean => {
  return (isMap(container) && container.has(key as T)) || String(key) in container;
};

/**
 * @alias {@link containsKey}
 */
export const hasKey = containsKey;
