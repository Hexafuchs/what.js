import { isArray, isObject, isSet, isMap, isString } from '@@/src';

/**
 * Returns whether the object or array contains the given value.
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

export const hasValue = containsValue;

/**
 * Returns whether the object contains the given key.
 */
export const containsKey = <T>(object: Record<string, unknown> | Map<T, unknown>, value: string | T): boolean => {
  return (isMap(object) && object.has(value as T)) || (isString(value) && value in object);
};

export const hasKey = containsKey;
