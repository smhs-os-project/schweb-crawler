export interface StandardPackage<T> {
  /**
   * The filename of this package.
   */
  filename: string;
  /**
   * The data of this package.
   *
   * Will be serialized as JSON.
   */
  data: T;
}
