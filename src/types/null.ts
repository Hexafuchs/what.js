/**
 * Returns whether the object is null.
 */
export const isNull = (object: unknown): object is null => {
  return object === null;
};
