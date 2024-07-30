/**
 * Error class for assertions.
 */
export class AssertionError extends Error {
  static code: 'ERR_ASSERTION';
  constructor(message: string) {
    super(message);
  }
}
