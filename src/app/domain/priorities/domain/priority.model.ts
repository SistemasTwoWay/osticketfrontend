export interface PriorityRoot {
  total: number;
  ticket_priority: Priority[];
}

export interface Priority {
  priority_id: number;
  priority: string;
  priority_desc: string;
  priority_color: string;
  priority_urgency: number;
  ispublic: number;
}
