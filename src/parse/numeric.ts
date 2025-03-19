import { isNumericPrimitive, isString } from '../types';

/**
 * Returns if the value is numeric (either a number, bigint or a string that represents a number).
 *
 * @group Checker
 * @category Parse
 */
export const isNumeric = (value: unknown): boolean => {
  if (isNumericPrimitive(value)) {
    return true;
  }
  if (!isString(value)) {
    return false;
  }

  if (value === '') {
    return false;
  }

  return !isNaN(Number(value));
};
