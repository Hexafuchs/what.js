/**
 * Returns whether the object is a date.
 *
 * Keep in mind that Date.now() returns a number, not a date object.
 */
export const isDate = (object: unknown): object is Date => {
  return object instanceof Date;
};
