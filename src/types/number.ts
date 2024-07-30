/**
 * Returns whether the object is a number (integer, float).
 *
 * This does not include BigInt.
 *
 * @group Checker
 * @category Type
 */
export function isNumber(object: unknown): object is number {
  return typeof object === 'number';
}

/**
 * Returns whether the object is a bigint.
 *
 * @group Checker
 * @category Type
 */
export function isBigInt(object: unknown): object is bigint {
  return typeof object === 'bigint';
}

/**
 * Returns whether the object is a number or bigint.
 *
 * @group Checker
 * @category Type
 */
export function isNumericPrimitive(object: unknown): object is number | bigint {
  return isNumber(object) || isBigInt(object);
}
