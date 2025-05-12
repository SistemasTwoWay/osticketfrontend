export interface StatusRoot {
  total: number;
  ticket_status: Status[];
}

export interface Status {
  id: number;
  name: string;
  state: string;
  mode: number;
  flags: number;
  sort: number;
  properties: string;
  created: string;
  updated: string;
}
