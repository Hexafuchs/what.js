/**
 * Returns whether the object is a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (object: unknown): object is Function => {
  return typeof object === 'function';
};
