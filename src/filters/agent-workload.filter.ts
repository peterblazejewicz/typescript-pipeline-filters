import {Agent} from '../agent';

import {Filter} from './filter';

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
  Execute(input: Agent[]): Agent[] {
    if (input === null || input.length < 1) {
      return input;
    }

    return input.filter(agent => agent.CurrentWorkload < agent.MaxWorkload);
  }
}
