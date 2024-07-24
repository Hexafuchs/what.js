/**
 * Returns whether the object is null.
 */
export const isNull = (object: unknown): object is null => {
  return object === null;
};

/**
 * Returns whether the object is undefined.
 */
export const isUndefined = (object: unknown): object is undefined => {
  return typeof object === 'undefined';
};

/**
 * Returns whether the object is a number (integer, float).
 */
export function isNumber(object: unknown): object is number {
  return typeof object === 'number';
}

/**
 * Returns whether the object is a string.
 */
export function isString(object: unknown): object is string {
  return typeof object === 'string';
}

/**
 * Returns whether the object is a non-null js object.
 *
 * Arrays are not included by default but you can add them using the `includeArrays` parameter.
 *
 * Even though null is counted as an object by Javascript, this function returns false for null values.
 *
 * @param object
 * @param includeArrays return true for arrays
 */
export const isObject = (object: unknown, includeArrays: boolean = false): object is NonNullable<object> => {
  return !isNull(object) && typeof object === 'object' && (includeArrays || !isArray(object));
};

/**
 * Returns whether the object is an array.
 */
export const isArray = (object: unknown): object is Array<unknown> => {
  return Array.isArray(object);
};

/**
 * Returns whether the object is a boolean.
 */
export const isBoolean = (object: unknown): object is boolean => {
  return typeof object === 'boolean';
};

/**
 * Returns whether the object is a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (object: unknown): object is Function => {
  return typeof object === 'function';
};
