/**
 * Returns whether the object is undefined.
 *
 * @group Checker
 * @category Type
 */
export const isUndefined = (object: unknown): object is undefined => {
  return typeof object === 'undefined';
};
