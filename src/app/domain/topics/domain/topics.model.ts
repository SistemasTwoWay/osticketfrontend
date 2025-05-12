export interface TopicRoot {
  status: string;
  total: number;
  topics: Topic[];
}

export interface Topic {
  id: number;
  parent: number;
  ispublic: number;
  sort: number;
  topic: string;
  notes: string;
  created: string;
  updated: string;
}
