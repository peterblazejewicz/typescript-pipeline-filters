import {AgentAvailabilityFilter, AgentPresenceUpdateDatetimeFilter, AgentWorkloadFilter} from '@demo/filters';
import {AgentSelectionPipeline} from '@demo/pipelines';
import {agents} from '@demo/repository';

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
