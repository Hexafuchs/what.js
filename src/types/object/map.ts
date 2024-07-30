/**
 * Returns whether the object is a map.
 *
 * @group Checker
 * @category Type
 */
export const isMap = (object: unknown): object is Map<unknown, unknown> => {
  return object instanceof Map;
};
