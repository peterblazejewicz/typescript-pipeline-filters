import {Agent} from '../agent';
import {Filter} from '../filters';

/**
 * Concrete filter
 *
 * @export
 * @class AgentWorkloadFilter
 * @implements {Filter<Agent[]>}
 */
export class AgentWorkloadFilter implements Filter<Agent[]> {
  /**
   * @inheritdoc
   *
   */
  execute(input: Agent[]): Agent[] {
    if (input === null || input.length < 1) {
      return input;
    }

    return input.filter(agent => agent.CurrentWorkload < agent.MaxWorkload);
  }
}
