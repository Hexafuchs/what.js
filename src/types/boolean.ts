/**
 * Returns whether the object is a boolean.
 *
 * @group Checker
 * @category Type
 */
export const isBoolean = (object: unknown): object is boolean => {
  return typeof object === 'boolean';
};
