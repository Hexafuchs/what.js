/**
 * Returns whether the object is null.
 */
export const isNull = (object: unknown): boolean => {
  return object === null;
};

/**
 * Returns whether the object is undefined.
 */
export const isUndefined = (object: unknown): boolean => {
  return typeof object === 'undefined';
};

/**
 * Returns whether the object is a number (integer, float).
 */
export const isNumber = (object: unknown): boolean => {
  return typeof object === 'number';
};

/**
 * Returns whether the object is a string.
 */
export const isString = (object: unknown): boolean => {
  return typeof object === 'string';
};

/**
 * Returns whether the object is a js object.
 *
 * Even though null is counted as an object by Javascript, this function returns false for null values.
 *
 * @param object
 * @param includeArrays return true for arrays
 */
export const isObject = (object: unknown, includeArrays: boolean = false): boolean => {
  return !isNull(object) && typeof object === 'object' && (includeArrays || !isArray(object));
};

/**
 * Returns whether the object is an array.
 */
export const isArray = (object: unknown): boolean => {
  return Array.isArray(object);
};

/**
 * Returns whether the object is a boolean.
 */
export const isBoolean = (object: unknown): boolean => {
  return typeof object === 'boolean';
};

/**
 * Returns whether the object is a function.
 */
export const isFunction = (object: unknown): boolean => {
  return typeof object === 'function';
};

/**
 * Returns whether the object is a neither null nor undefined.
 */
export const isSet = (object: unknown): boolean => {
  return !isNotSet(object);
};

/**
 * Returns whether the object is a either null or undefined.
 */
export const isNotSet = (object: unknown): boolean => {
  return isUndefined(object) || isNull(object);
};

/**
 * Returns whether the object is considered empty.
 *
 * This includes:
 * - null
 * - undefined
 * - false
 * - 0 or 0.0
 * - empty array []
 * - empty object {}
 */
export const isEmpty = (object: unknown): boolean => {
  return (
    isNotSet(object) ||
    (isBoolean(object) && object === false) ||
    (isArray(object) && (object as Array<unknown>).length === 0) ||
    (isString(object) && object === '') ||
    (isNumber(object) && object === 0) ||
    (isObject(object) && Object.keys(object as object).length === 0)
  );
};

/**
 * Returns whether the object is considered not empty.
 *
 * This includes everything except:
 * - null
 * - undefined
 * - false
 * - 0 and 0.0
 * - empty array []
 * - empty object {}
 */
export const isNotEmpty = (object: unknown): boolean => {
  return !isEmpty(object);
};
