export interface Agent {
  AgentId: string;
  PresenceStatus: Presence;
  CurrentWorkload: number;
  MaxWorkload: number;
  StatusUpdateDatetime: Date;
}

export type Presence = "Available" | "Busy" | "Research" | "Offline";