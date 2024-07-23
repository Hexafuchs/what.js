import { isFunction } from '@/types';
import { isSet } from '@/state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasFunction = (object: any, name: string): boolean => {
  return isSet(object) && isFunction(object[name]);
};
