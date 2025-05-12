import { inject, Injectable } from '@angular/core';
import { ITicketApiService } from './ticket-api.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TicketLiteRoot } from '../domain/ticket-resume.model';
import { map, Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import {
  TicketCreate,
  TicketCreateResponse,
} from '../domain/ticket-create.model';
import { TicketReply } from '../domain/ticket-reply.model';
import { TicketDataRoot } from '../domain/ticket-data.model';

@Injectable({
  providedIn: 'root',
})
export class TicketApiService implements ITicketApiService {
  private readonly _apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  getTicketsByEmail(
    email: string
  ): Observable<ResponseApi<TicketLiteRoot> | null> {
    const bodyTicket: RequestApi = {
      query: 'ticket',
      condition: 'getByEmail',
      parameters: {
        address: email,
      },
    };

    const url = this._apiUrl;
    const headers = new HttpHeaders();

    return this._http
      .post<ResponseApi<TicketLiteRoot>>(url, bodyTicket, { headers })
      .pipe(
        map((response) => {
          if (response.status != 'Success') return null;
          return response;
        })
      );
  }

  getTicketDetailsByNumber(
    number: string
  ): Observable<ResponseApi<TicketDataRoot> | null> {
    const bodyTicket: RequestApi = {
      query: 'ticket',
      condition: 'getDetailedByNumber',
      parameters: {
        number: number,
      },
    };

    const url = this._apiUrl;
    const headers = new HttpHeaders();

    return this._http
      .post<ResponseApi<TicketDataRoot>>(url, bodyTicket, { headers })
      .pipe(
        map((response) => {
          if (response.status != 'Success') return null;
          return response;
        })
      );
  }

  createTicket(
    request: RequestApi<TicketCreate>
  ): Observable<ResponseApi<TicketCreateResponse>> {
    const url = this._apiUrl;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<TicketCreateResponse>>(url, request, {
      headers,
    });
  }

  replyTicket(
    request: RequestApi<TicketReply>
  ): Observable<ResponseApi<{ status: string; message: string }>> {
    const url = this._apiUrl;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<{ status: string; message: string }>>(
      url,
      request,
      {
        headers,
      }
    );
  }
}
