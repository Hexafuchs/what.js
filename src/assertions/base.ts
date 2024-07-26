import { AssertionError } from 'node:assert';

export function assertIs<T>(callback: { (object: T): boolean }, object: T, typeName: string): void {
  assert(() => callback(object), `object passed is not of type ${typeName}: ${String(object)}`);
}

export function assertIsNot<T>(callback: { (object: T): boolean }, object: T, typeName: string): void {
  assertNot(() => callback(object), `object passed is of type ${typeName}: ${String(object)}`);
}

export function assert(callback: { (): boolean }, errorMsg: string): void {
  if (!callback()) {
    throw new AssertionError({ message: errorMsg });
  }
}

export function assertNot(callback: { (): boolean }, errorMsg: string): void {
  if (callback()) {
    throw new AssertionError({ message: errorMsg });
  }
}
