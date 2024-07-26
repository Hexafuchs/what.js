/**
 * Returns whether the object is a promise.
 */
export const isSet = (object: unknown): object is Set<unknown> => {
  return object instanceof Set;
};
