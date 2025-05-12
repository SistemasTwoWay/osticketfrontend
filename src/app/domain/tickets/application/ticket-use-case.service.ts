import { Inject, Injectable } from '@angular/core';
import { HTTP_TICKET_SERVICE } from '../infrastructure/providers/ticket.provider';
import { ITicketApiService } from '../infrastructure/ticket-api.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketUseCaseService {
  constructor(
    @Inject(HTTP_TICKET_SERVICE) private _ticketApiService: ITicketApiService
  ) { }

  getTicketsByEmail(email: string) {
    return this._ticketApiService.getTicketsByEmail(email);
  }
}
