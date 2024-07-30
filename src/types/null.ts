/**
 * Returns whether the object is null.
 *
 * @group Checker
 * @category Type
 */
export const isNull = (object: unknown): object is null => {
  return object === null;
};
