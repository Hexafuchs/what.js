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
 */
export const isAccepted = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'true' || repr === 't' || repr === 'yes' || repr === 'y' || repr === 'on' || repr === '1';
};

export const isYes = isAccepted;
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
 */
export const isDeclined = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return (
    repr === 'false' || repr === 'f' || repr === 'no' || repr === 'n' || repr === 'off' || repr === '0' || repr === '-1'
  );
};

export const isNo = isDeclined;
export const isOff = isDeclined;

/**
 * Returns if the value is considered missing.
 *
 * This includes everything that can be converted with String(value) and has one of these values in lowercase:
 * - null
 * - undefined
 * - none
 * - '' (empty string)
 */
export const isMissing = (value: unknown): boolean => {
  const repr = String(value).toLowerCase();

  return repr === 'null' || repr === 'undefined' || repr === 'none' || repr === '';
};

export const isNullish = isMissing;
