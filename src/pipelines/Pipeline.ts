import {Filter} from '../filters';
/**
 * An abstract Pipeline with a list of filters and abstract Process method
 * @export
 * @abstract
 * @class Pipeline
 * @template T
 */
export abstract class Pipeline<T> {
  /**
   * List of filters in the pipeline
   * @type {Array<Filter<T>>}
   * @memberof Pipeline
   */
  readonly filters: Array<Filter<T>> = [];

  /**
   * To Register filter in the pipeline
   * @param {Filter<T>} filter A filter object implementing Filter interface
   * @returns {Pipeline<T>}
   * @memberof Pipeline
   */
  register(filter: Filter<T>): Pipeline<T> {
    this.filters.push(filter);
    return this;
  }

  /**
   * To start processing on the Pipeline
   * @abstract
   * @param {T} input The input object on which filter processing would execute
   * @returns {T}
   * @memberof Pipeline
   */
  abstract process(input: T): T;
}
