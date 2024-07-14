export const isNull = (object: unknown): boolean => {
  return object === null;
};

export const isUndefined = (object: unknown): boolean => {
  return typeof object === 'undefined';
};

export const isNumber = (object: unknown): boolean => {
  return typeof object === 'number';
};

export const isString = (object: unknown): boolean => {
  return typeof object === 'string';
};

export const isObject = (object: unknown, includeArrays: boolean = false): boolean => {
  return !isNull(object) && typeof object === 'object' && (includeArrays || !isArray(object));
};

export const isArray = (object: unknown): boolean => {
  return Array.isArray(object);
};

export const isBoolean = (object: unknown): boolean => {
  return typeof object === 'boolean';
};

export const isFunction = (object: unknown): boolean => {
  return typeof object === 'function';
};

export const isSet = (object: unknown): boolean => {
  return !isNotSet(object);
};

export const isNotSet = (object: unknown): boolean => {
  return isUndefined(object) || isNull(object);
};

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

export const isNotEmpty = (object: unknown): boolean => {
  return !isEmpty(object);
};
