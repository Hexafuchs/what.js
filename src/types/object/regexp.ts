/**
 * Returns whether the object is a regular expression.
 */
export const isRegExp = (object: unknown): object is RegExp => {
  return object instanceof RegExp;
};
