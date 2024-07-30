import { isNumeric } from '@@/src';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the value is numeric (either a number, bigint or a string that represents a number).
 *
 * @group Assertions
 * @category Parse
 */
export function assertIsNumeric(value: unknown) {
  assert(() => isNumeric(value), `value is not considered numeric: ${String(value)}`);
}

/**
 * Asserts the value is not numeric (either a number, bigint or a string that represents a number).
 *
 * @group Assertions
 * @category Parse
 */
export function assertIsNotNumeric(value: unknown) {
  assertNot(() => isNumeric(value), `value is considered numeric: ${String(value)}`);
}
