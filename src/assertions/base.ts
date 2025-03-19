import { AssertionError } from '../errors';

/**
 * @internal
 */
export function assertIs<T>(callback: { (object: T): boolean }, object: T, typeName: string): void {
  assert(() => callback(object), `object passed is not of type ${typeName}: ${String(object)}`);
}

/**
 * @internal
 */
export function assertIsNot<T>(callback: { (object: T): boolean }, object: T, typeName: string): void {
  assertNot(() => callback(object), `object passed is of type ${typeName}: ${String(object)}`);
}

/**
 * @internal
 */
export function assert(callback: { (): boolean }, errorMsg: string): void {
  if (!callback()) {
    throw new AssertionError(errorMsg);
  }
}

/**
 * @internal
 */
export function assertNot(callback: { (): boolean }, errorMsg: string): void {
  if (callback()) {
    throw new AssertionError(errorMsg);
  }
}
