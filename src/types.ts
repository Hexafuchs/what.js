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

