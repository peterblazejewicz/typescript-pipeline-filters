import {Agent} from '../agent';
import {Filter} from './filter';

/**
 * Concrete filter
 * @export
 * @class AgentPresenceUpdateDatetimeFilter
 * @implements {Filter<Agent[]>}
 */
export class AgentPresenceUpdateDatetimeFilter implements Filter<Agent[]> {
  /**
   * @inheritdoc
   *
   * @param {Agent[]} input
   * @returns {Agent[]}
   * @memberof AgentPresenceUpdateDatetimeFilter
   */
  Execute(input: Agent[]): Agent[] {
    if (input === null || input.length < 1) {
      return input;
    }
    const utcNow = new Date().getUTCDate();
    // 3 minutes
    const offset = 1000 * 60 * 3;
    return input.filter(
        agent => (utcNow - agent.StatusUpdateDatetime.getUTCDate()) < offset);
  }
}