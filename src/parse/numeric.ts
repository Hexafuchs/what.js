import { isNumericPrimitive, isString } from '@@/src';

/**
 * Returns if the value is numeric (either a number or a string that represents a number).
 */
export const isNumeric = (value: unknown): boolean => {
  if (isNumericPrimitive(value)) {
    return true;
  }
  if (!isString(value)) {
    return false;
  }

  return !isNaN(Number(value));
};
