import * as parse from '@@/src/parse/index';
import { assert, assertNot } from '@/assertions/base';

/**
 * Asserts the value is numeric (either a number, bigint or a string that represents a number).
 */
export function assertIsNumeric(value: unknown) {
  assert(() => parse.isNumeric(value), `value is not considered numeric: ${String(value)}`);
}

/**
 * Asserts the value is not numeric (either a number, bigint or a string that represents a number).
 */
export function assertIsNotNumeric(value: unknown) {
  assertNot(() => parse.isNumeric(value), `value is considered numeric: ${String(value)}`);
}
