/**
 * Returns whether the object is a promise.
 *
 * @group Checker
 * @category Type
 */
export const isPromise = (object: unknown): object is Promise<unknown> => {
  return object instanceof Promise;
};
