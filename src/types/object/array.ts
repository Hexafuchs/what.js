/**
 * Returns whether the object is an array.
 */
export const isArray = (object: unknown): object is Array<unknown> => {
  return Array.isArray(object);
};
