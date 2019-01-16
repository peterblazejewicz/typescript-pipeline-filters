import {Agent} from './agent';

export const agents: Agent[] = [
  {
    AgentId: 'agent_id_1',
    PresenceStatus: 'Available',
    CurrentWorkload: 1,
    MaxWorkload: 2,
    StatusUpdateDatetime: new Date()
  },
  {
    AgentId: 'agent_id_2',
    PresenceStatus: 'Busy',
    CurrentWorkload: 2,
    MaxWorkload: 2,
    StatusUpdateDatetime: new Date()
  },
  {
    AgentId: 'agent_id_3',
    PresenceStatus: 'Available',
    CurrentWorkload: 2,
    MaxWorkload: 3,
    StatusUpdateDatetime: new Date()
  },
  {
    AgentId: 'agent_id_4',
    PresenceStatus: 'Research',
    CurrentWorkload: 2,
    MaxWorkload: 3,
    StatusUpdateDatetime: new Date()
  },
  {
    AgentId: 'agent_id_5',
    PresenceStatus: 'Available',
    CurrentWorkload: 2,
    MaxWorkload: 3,
    StatusUpdateDatetime: new Date()
  },
  {
    AgentId: 'agent_id_6',
    PresenceStatus: 'Available',
    CurrentWorkload: 5,
    MaxWorkload: 5,
    StatusUpdateDatetime: new Date()
  }
];
