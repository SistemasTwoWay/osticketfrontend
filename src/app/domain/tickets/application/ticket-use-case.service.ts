import { Inject, Injectable } from '@angular/core';
import { ITicketApiService } from '../infrastructure/ticket-api.interface';
import { HTTP_TICKET_SERVICE } from '../infrastructure/ticket.provider';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { TicketCreate } from '../domain/ticket-create.model';
import { TicketReply } from '../domain/ticket-reply.model';

@Injectable({
  providedIn: 'root',
})
export class TicketUseCaseService {
  constructor(
    @Inject(HTTP_TICKET_SERVICE) private _ticketApiService: ITicketApiService
  ) {}

  getTicketsByEmail(email: string) {
    return this._ticketApiService.getTicketsByEmail(email);
  }

  getTicketDetailsByNumber(number: string) {
    return this._ticketApiService.getTicketDetailsByNumber(number);
  }

  createTicket(request: RequestApi<TicketCreate>) {
    return this._ticketApiService.createTicket(request);
  }

  replyTicket(request: RequestApi<TicketReply>) {
    return this._ticketApiService.replyTicket(request);
  }
}
