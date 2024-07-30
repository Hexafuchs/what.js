/**
 * Returns whether the object is a regular expression.
 *
 * @group Checker
 * @category Type
 */
export const isRegExp = (object: unknown): object is RegExp => {
  return object instanceof RegExp;
};
