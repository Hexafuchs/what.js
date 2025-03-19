import { isDefined } from './present';
import { isFunction } from '../types';

/**
 * Returns if the object has the given function.
 *
 * @group Checker
 * @category State
 */
export const hasFunction = <T>(object: T, name: string): boolean => {
  return isDefined(object) && isFunction(object[name as keyof T]);
};
