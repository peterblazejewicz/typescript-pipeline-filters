import {Filter} from '@demo/filters';

import {Agent} from '../agent';

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
