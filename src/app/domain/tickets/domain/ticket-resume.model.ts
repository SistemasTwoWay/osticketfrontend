export interface TicketLiteRoot {
  status: string;
  tickets: TicketLite[];
}

export interface TicketLite {
  user_id: number;
  address: string;
  ticket_id: number;
  ticket_number: string;
  status_name: string;
  subject: string;
}
