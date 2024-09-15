/**
 * Returns whether the object is a function.
 *
 * @group Checker
 * @category Type
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = (object: unknown): object is Function => {
  return typeof object === 'function';
};
