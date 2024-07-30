/**
 * Returns whether the object is an array.
 *
 * @group Checker
 * @category Type
 */
export const isArray = (object: unknown): object is Array<unknown> => {
  return Array.isArray(object);
};
