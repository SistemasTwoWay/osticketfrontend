export interface TicketCreate {
  title: string;
  subject: string;
  full_name_user: string;
  user_email: string;
  user_phone: string;
  user_notes: string;
  priority_id: number;
  status_id: number;
  dept_id: number;
  sla_id: number;
  topic_id: number;
}

export interface TicketCreateResponse {
  status: string;
  message: string;
  ticket_id: number;
}
