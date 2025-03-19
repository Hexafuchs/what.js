import { isNotPresent } from './present';
import {
  isArray,
  isBoolean,
  isDate,
  isError,
  isMap,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString
} from '../types';

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
 * - empty set
 * - empty map
 *
 * @group Checker
 * @category State
 */
export const isEmpty = (object: unknown): boolean => {
  return (
    isNotPresent(object) ||
    (isBoolean(object) && !object) ||
    (isString(object) && object === '') ||
    (isNumber(object) && object === 0) ||
    (isArray(object) && object.length === 0) ||
    ((isSet(object) || isMap(object)) && object.size === 0) ||
    (isObject(object) &&
      Object.keys(object).length === 0 &&
      !isMap(object) &&
      !isSet(object) &&
      !isDate(object) &&
      !isError(object) &&
      !isPromise(object) &&
      !isRegExp(object))
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
 * - empty set
 * - empty map
 *
 * @group Checker
 * @category State
 */
export const isNotEmpty = (object: unknown): boolean => {
  return !isEmpty(object);
};
