import {Agent} from '../agent';
import {Filter} from '../filters';

/**
 * ConcreteFilter
 *
 * @export
 * @class AgentAvailabilityFilter
 * @implements {Filter<Agent[]>}
 */
export class AgentAvailabilityFilter implements Filter<Agent[]> {
  /**
   * @inheritdoc
   */
  execute(input: Agent[]): Agent[] {
    if (input === null || input.length < 1) {
      return input;
    }
    return input.filter(agent => agent.PresenceStatus === 'Available');
  }
}
