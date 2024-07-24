/**
 * Returns whether the object is undefined.
 */
export const isUndefined = (object: unknown): object is undefined => {
  return typeof object === 'undefined';
};
