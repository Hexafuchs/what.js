import { hasFunction } from '@@/src';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the object has the given function.
 *
 * @group Assertions
 * @category Type
 */
export function assertHasFunction<T>(object: T, name: string) {
  assert(() => hasFunction(object, name), `object has no function ${name}`);
}

/**
 * Asserts the object does not have the given function.
 *
 * @group Assertions
 * @category Type
 */
export function assertHasNotFunction<T>(object: T, name: string) {
  assertNot(() => hasFunction(object, name), `object has function ${name}`);
}

/**
 * @alias {@link assertHasNotFunction}
 */
export const assertDoesNotHaveFunction = assertHasNotFunction;
