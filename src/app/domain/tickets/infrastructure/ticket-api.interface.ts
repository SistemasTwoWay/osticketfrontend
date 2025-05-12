import { Observable } from 'rxjs';
import { TicketLiteRoot } from '../domain/ticket-resume.model';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import {
  TicketCreate,
  TicketCreateResponse,
} from '../domain/ticket-create.model';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { TicketReply } from '../domain/ticket-reply.model';

export interface ITicketApiService {
  getTicketsByEmail(
    email: string
  ): Observable<ResponseApi<TicketLiteRoot> | null>;
  createTicket(
    request: RequestApi<TicketCreate>
  ): Observable<ResponseApi<TicketCreateResponse>>;
  replyTicket(
    request: RequestApi<TicketReply>
  ): Observable<ResponseApi<{ status: string; message: string }>>;
}
