export interface TicketResumeApi {
    readonly userId: number;
    readonly address: string;
    readonly ticket_id: number;
    readonly ticket_number: string;
    readonly status_name: string;
    readonly subject: string;
}