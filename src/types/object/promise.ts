/**
 * Returns whether the object is a promise.
 */
export const isPromise = (object: unknown): object is Promise<unknown> => {
  return object instanceof Promise;
};
