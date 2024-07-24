import { isSet } from '@@/src';

/**
 * Returns whether the object is a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (object: unknown): object is Function => {
  return typeof object === 'function';
};

export const hasFunction = <T>(object: T, name: string): boolean => {
  return isSet(object) && isFunction(object[name as keyof T]);
};
