import { isNull, isUndefined } from '@@/src';

/**
 * Returns whether the object is a neither null nor undefined.
 *
 * @alias isPresent
 */
export const isPresent = (object: unknown): object is NonNullable<unknown> => {
  return !isNotPresent(object);
};

export const isDefined = isPresent;

/**
 * Returns whether the object is a either null or undefined.
 */
export const isNotPresent = (object: unknown): object is null | undefined => {
  return isUndefined(object) || isNull(object);
};
