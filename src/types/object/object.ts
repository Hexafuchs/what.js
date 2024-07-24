import { isNull } from '@@/src';

/**
 * Returns whether the object is considered an object.
 *
 * Even though null is counted as an object by Javascript, this function returns false for null values.
 *
 * If you want to check for Date, Error, Array, Map, Set, Regexp or Promise, there are special methods for this.
 */
export const isObject = (object: unknown): object is NonNullable<object> => {
  return !isNull(object) && typeof object === 'object';
};
