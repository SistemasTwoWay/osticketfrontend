import { Observable } from "rxjs";
import { TicketResume } from "../domain/ticket-resume.model";

export interface ITicketApiService {
    getTicketsByEmail(email: string): Observable<TicketResume[]>;
}