import { isArray, isBoolean, isNumber, isObject, isString } from '@@/src';
import { isNotPresent } from '@/state/set';

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
    isNotPresent(object) ||
    (isBoolean(object) && !object) ||
    (isArray(object) && object.length === 0) ||
    (isString(object) && object === '') ||
    (isNumber(object) && object === 0) ||
    (isObject(object) && Object.keys(object).length === 0)
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
