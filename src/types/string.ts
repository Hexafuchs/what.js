/**
 * Returns whether the object is a string.
 */
export function isString(object: unknown): object is string {
  return typeof object === 'string';
}
