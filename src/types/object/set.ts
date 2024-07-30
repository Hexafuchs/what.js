/**
 * Returns whether the object is a promise.
 *
 * @group Checker
 * @category Type
 */
export const isSet = (object: unknown): object is Set<unknown> => {
  return object instanceof Set;
};
