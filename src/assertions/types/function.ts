/* eslint-disable @typescript-eslint/ban-types */
import * as types from '@@/src/types/index';
import { assertIs, assertIsNot, assert, assertNot } from '@/assertions/base';

/**
 * Asserts the object is a function.
 */
export function assertIsFunction(object: unknown): asserts object is Function {
  assertIs(types.isFunction, object, 'function');
}

/**
 * Asserts the object is a function or null.
 */
export function assertIsFunctionOrNull(object: unknown): asserts object is Function | null {
  assertIs(obj => types.isNull(obj) || types.isFunction(obj), object, 'function or null');
}

/**
 * Asserts the object is not a function.
 */
export function assertIsNotFunction<T>(object: T | Function): asserts object is T {
  assertIsNot(types.isFunction, object, 'function');
}

/**
 * Asserts the object has the given function.
 */
export function assertHasFunction<T>(object: T, name: string) {
  assert(() => types.hasFunction(object, name), `object has no function ${name}`);
}

/**
 * Asserts the object does not have the given function.
 */
export function assertNotHasFunction<T>(object: T, name: string) {
  assertNot(() => types.hasFunction(object, name), `object has function ${name}`);
}

export const assertDoesNotHaveFunction = assertNotHasFunction;
