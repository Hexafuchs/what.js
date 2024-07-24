import { isArray, isObject } from '@@/src';

/**
 * Returns whether the object or array contains the given value.
 */
export const containsValue = (arrayOrObject: Array<unknown> | Record<string, unknown>, value: unknown): boolean => {
  return (
    (isArray(arrayOrObject) && arrayOrObject.indexOf(value) !== -1) ||
    (isObject(arrayOrObject) && Object.values(arrayOrObject).indexOf(value) !== -1)
  );
};

export const hasValue = containsValue;

/**
 * Returns whether the object contains the given key.
 */
export const containsKey = (object: Record<string, unknown>, value: string): boolean => {
  return value in object;
};

export const hasKey = containsKey;
