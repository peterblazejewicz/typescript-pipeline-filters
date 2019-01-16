/**
 * A filter to be registered in the message processing pipeline
 * @export
 * @interface Filter
 * @template T
 */
export interface Filter<T> {
  /**
   * Filter implementing this method would perform processing on the input type
   * T
   * @param {T} input
   * @returns {T}
   * @memberof Filter
   */
  execute(input: T): T;
}
