/**
 * Returns whether the object is a number (integer, float).
 *
 * This does not include BigInt.
 */
export function isNumber(object: unknown): object is number {
  return typeof object === 'number';
}

/**
 * Returns whether the object is a bigint.
 */
export function isBigInt(object: unknown): object is bigint {
  return typeof object === 'bigint';
}

/**
 * Returns whether the object is a number or bigint.
 */
export function isNumericPrimitive(object: unknown): object is number | bigint {
  return isNumber(object) || isBigInt(object);
}
