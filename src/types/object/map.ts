/**
 * Returns whether the object is a map.
 */
export const isMap = (object: unknown): object is Map<unknown, unknown> => {
  return object instanceof Map;
};
