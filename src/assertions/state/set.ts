import * as state from '@@/src/state/index';
import { assert } from '@/assertions/base';

/**
 * Asserts the object is considered set.
 */
export function assertSet(object: unknown): asserts object is NonNullable<unknown> {
  assert(() => state.isSet(object), `object is not considered set: ${String(object)}`);
}

/**
 * Asserts the object is not considered set.
 */
export function assertNotSet(object: unknown): asserts object is null | undefined {
  assert(() => state.isNotSet(object), `object is considered set: ${String(object)}`);
}
