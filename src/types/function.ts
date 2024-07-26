import { isDefined } from '@@/src';

/**
 * Returns whether the object is a function.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (object: unknown): object is Function => {
  return typeof object === 'function';
};

/**
 * Returns if the object has the given function.
 */
export const hasFunction = <T>(object: T, name: string): boolean => {
  return isDefined(object) && isFunction(object[name as keyof T]);
};