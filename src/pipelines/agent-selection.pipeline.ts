import {Agent} from '../agent';
import {Pipeline} from './pipeline';

/**
 * Concrete pipeline
 * @export
 * @class AgentSelectionPipeline
 * @extends {Pipeline<Agent>}
 */
export class AgentSelectionPipeline extends Pipeline<Agent[]> {
  /**
   * Method which executes the filter on a given Input
   * @param {Agent} input Input on which filtering needs to happen as implementing in individual filters<
   * @inheritdoc
   */
  process(input: Agent[]): Agent[] {
    this.filters.forEach(filter => (input = filter.Execute(input)));
    return input;
  }
}
