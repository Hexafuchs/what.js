import * as state from '@@/src/state/index';
import { assert } from '@/assertions/base';

/**
 * Asserts the object is not null or undefined.
 *
 * @alias assertPresent
 */
export function assertPresent(object: unknown): asserts object is NonNullable<unknown> {
  assert(() => state.isPresent(object), `object is not considered preset: ${String(object)}`);
}

export const assertDefined = assertPresent;

/**
 * Asserts the object is null or undefined.
 */
export function assertNotSet(object: unknown): asserts object is null | undefined {
  assert(() => state.isNotPresent(object), `object is considered preset: ${String(object)}`);
}
