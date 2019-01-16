# Typescript Pipeline Filters

Pipeline and Filters pattern

## Description

This repo contains sample implementation of `Pipeline and Filters Pattern`. The C# version on which this code is mostly based can be found here:

- [Pipeline and Filters Pattern using C#](https://www.codeproject.com/Articles/1094513/%2FArticles%2F1094513%2FPipeline-and-Filters-Pattern-using-Csharp)

The pattern description:

- [Pipes and Filters pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters)

```ts
import {
  AgentAvailabilityFilter,
  AgentPresenceUpdateDatetimeFilter,
  AgentWorkloadFilter
} from "@demo/filters";
import { AgentSelectionPipeline } from "@demo/pipelines";
import { agents } from "@demo/repository";

// Get the Agents from repository
const agentsStatus = agents;
console.log(`agents before processing: ${agentsStatus.length}`);
console.log(`processing...`);
// Construct the Pipeline object
const agentStatusPipeline: AgentSelectionPipeline = new AgentSelectionPipeline();

// Register the filters to be executed
agentStatusPipeline
  .register(new AgentAvailabilityFilter())
  .register(new AgentWorkloadFilter())
  .register(new AgentPresenceUpdateDatetimeFilter());

// Start pipeline processing
const processedAgentStatus = agentStatusPipeline.process(agentsStatus);
console.log(`agents after processing: ${processedAgentStatus.length}`);
```

## Usage

```bash
npm i
npm run build
npm start
```

## Author

@peterblazejewicz
