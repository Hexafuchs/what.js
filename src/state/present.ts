import { isNull, isUndefined } from '../types';

/**
 * Returns whether the object is a neither null nor undefined.
 *
 * @group Checker
 * @category State
 */
export const isPresent = (object: unknown): object is NonNullable<unknown> => {
  return !isNotPresent(object);
};

/**
 * @alias {@link isPresent}
 */
export const isDefined = isPresent;

/**
 * Returns whether the object is a either null or undefined.
 *
 * @group Checker
 * @category State
 */
export const isNotPresent = (object: unknown): object is null | undefined => {
  return isUndefined(object) || isNull(object);
};
