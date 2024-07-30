/**
 * Returns whether the object is a string.
 *
 * @group Checker
 * @category Type
 */
export function isString(object: unknown): object is string {
  return typeof object === 'string';
}
