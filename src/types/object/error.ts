/**
 * Returns whether the object is an error.
 */
export const isError = (object: unknown): object is Error => {
  return object instanceof Error;
};
