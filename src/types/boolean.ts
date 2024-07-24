/**
 * Returns whether the object is a boolean.
 */
export const isBoolean = (object: unknown): object is boolean => {
  return typeof object === 'boolean';
};
