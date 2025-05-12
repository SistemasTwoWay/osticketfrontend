export interface TicketDataRoot {
    status: string;
    ticket: TicketData;
}

export interface TicketData {
    user_id: number,
    address: string,
    name: string,
    ticket_id: number,
    number: string,
    created: string,
    status: string,
    subject: string,
    priority: string,
    department: string,
    topic: string,
    lastresponse?: string,
    lastmessage: string,
    firstname?: string,
    lastname?: string,
}