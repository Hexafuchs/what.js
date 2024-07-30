/**
 * Returns if the value is a value that expresses acceptance.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - true
 * - t
 * - 1
 * - on
 * - yes
 * - y
 *
 * @group Checker
 * @category Parse
 */
export const isAccepted = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'true' || repr === 't' || repr === 'yes' || repr === 'y' || repr === 'on' || repr === '1';
};

/**
 * @alias {@link isAccepted}
 */
export const isYes = isAccepted;
/**
 * @alias {@link isAccepted}
 */
export const isOn = isAccepted;

/**
 * Returns if the value is a value that expresses decline.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - false
 * - f
 * - 0
 * - -1
 * - off
 * - no
 * - n
 *
 * @group Checker
 * @category Parse
 */
export const isDeclined = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return (
    repr === 'false' || repr === 'f' || repr === 'no' || repr === 'n' || repr === 'off' || repr === '0' || repr === '-1'
  );
};

/**
 * @alias {@link isDeclined}
 */
export const isNo = isDeclined;
/**
 * @alias {@link isDeclined}
 */
export const isOff = isDeclined;

/**
 * Returns if the value is considered missing.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 *
 * @group Checker
 * @category Parse
 */
export const isMissing = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'null' || repr === 'undefined' || repr === 'none' || repr === '';
};

/**
 * @alias {@link isMissing}
 */
export const isNullish = isMissing;
