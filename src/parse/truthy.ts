/*
 * Returns if the value is "truthy".
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - 1
 * - on
 * - yes
 * - y
 */
export const isTruthy = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'true' || repr === 't' || repr === '1' || repr === 'on' || repr === 'yes' || repr === 'y';
};

/*
 * Returns if the value is "falsy".
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - 0
 * - -1
 * - off
 * - no
 * - n
 */
export const isFalsy = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return (
    repr === 'false' || repr === 'f' || repr === '0' || repr === '-1' || repr === 'off' || repr === 'no' || repr === 'n'
  );
};

/*
 * Returns if the value is "nullish".
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 */
export const isNullish = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'null' || repr === 'undefined' || repr === 'none' || repr === '';
};
