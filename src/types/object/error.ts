/**
 * Returns whether the object is an error.
 *
 * @group Checker
 * @category Type
 */
export const isError = (object: unknown): object is Error => {
  return object instanceof Error;
};
