import { inject, Injectable } from '@angular/core';
import { ITicketApiService } from './ticket-api.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TicketResumeApi } from './models/ticket-resume-api.model';
import { TicketResume } from '../domain/ticket-resume.model';
import { map, Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketApiService implements ITicketApiService {
  private _http = inject(HttpClient);
  private readonly BASE_URL = environment.apiUrl;
  private readonly API_KEY = environment.apiKey;

  private _setMapTicketResume(ticket: TicketResumeApi): TicketResume {
    return {
      userId: ticket.userId,
      address: ticket.address,
      ticketId: ticket.ticket_id,
      ticketNumber: ticket.ticket_number,
      statusName: ticket.status_name,
      subject: ticket.subject,
    };
  }

  private _SetMapTicketsResume(tickets: TicketResumeApi[]): TicketResume[] {
    return tickets.map((ticket) => {
      return {
        userId: ticket.userId,
        address: ticket.address,
        ticketId: ticket.ticket_id,
        ticketNumber: ticket.ticket_number,
        statusName: ticket.status_name,
        subject: ticket.subject,
      };
    });
  }

  getTicketsByEmail(email: string): Observable<TicketResume[]> {
    const url = this.BASE_URL;
    const headers = new HttpHeaders({
      'apikey': this.API_KEY,
      'Content-Type': 'application/json'
    });

    const bodyTicket: RequestApi =  {
      query:"ticket",
      condition: "getByEmail",
      parameters: {
        address: email
      },
    }

    return this._http.post<ResponseApi>(url, bodyTicket, { headers }).pipe(
      map((response) => {
        if (response.status != 'Success') return [];
        return this._SetMapTicketsResume(response.data.tickets as TicketResumeApi[]);
      })
    )
  }
}
