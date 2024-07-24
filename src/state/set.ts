import { isNull, isUndefined } from '@@/src';

/**
 * Returns whether the object is a neither null nor undefined.
 */
export const isSet = (object: unknown): object is NonNullable<unknown> => {
  return !isNotSet(object);
};

/**
 * Returns whether the object is a either null or undefined.
 */
export const isNotSet = (object: unknown): object is null | undefined => {
  return isUndefined(object) || isNull(object);
};
