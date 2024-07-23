import { isArray, isBoolean, isNull, isNumber, isObject, isString, isUndefined } from '@/types';

/**
 * Returns whether the object is a neither null nor undefined.
 */
export const isSet = (object: unknown): boolean => {
  return !isNotSet(object);
};

/**
 * Returns whether the object is a either null or undefined.
 */
export const isNotSet = (object: unknown): boolean => {
  return isUndefined(object) || isNull(object);
};

/**
 * Returns whether the object is considered empty.
 *
 * This includes:
 * - null
 * - undefined
 * - false
 * - 0 or 0.0
 * - empty array []
 * - empty object {}
 */
export const isEmpty = (object: unknown): boolean => {
  return (
    isNotSet(object) ||
    (isBoolean(object) && object === false) ||
    (isArray(object) && (object as Array<unknown>).length === 0) ||
    (isString(object) && object === '') ||
    (isNumber(object) && object === 0) ||
    (isObject(object) && Object.keys(object as object).length === 0)
  );
};

/**
 * Returns whether the object is considered not empty.
 *
 * This includes everything except:
 * - null
 * - undefined
 * - false
 * - 0 and 0.0
 * - empty array []
 * - empty object {}
 */
export const isNotEmpty = (object: unknown): boolean => {
  return !isEmpty(object);
};
