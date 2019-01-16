/** empty */
import {agents} from './agents-status.repository';
import {AgentAvailabilityFilter} from './filters/agent-availability.filter';
import {AgentPresenceUpdateDatetimeFilter} from './filters/agent-presence-update-datetime.filter';
import {AgentWorkloadFilter} from './filters/agent-workload.filter';
import {AgentSelectionPipeline} from './pipelines/agent-selection.pipeline';


// Get the Agents from repository
const agentsStatus = agents;
console.log(`agents before processing: ${agentsStatus.length}`);
console.log(`processing...`);
// Construct the Pipeline object
const agentStatusPipeline: AgentSelectionPipeline =
    new AgentSelectionPipeline();

// Register the filters to be executed
agentStatusPipeline.register(new AgentAvailabilityFilter())
    .register(new AgentWorkloadFilter())
    .register(new AgentPresenceUpdateDatetimeFilter());

// Start pipeline processing
const processedAgentStatus = agentStatusPipeline.process(agentsStatus);
console.log(`agents after processing: ${processedAgentStatus.length}`);