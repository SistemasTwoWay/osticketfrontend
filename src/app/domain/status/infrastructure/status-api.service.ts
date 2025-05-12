import { inject, Injectable } from '@angular/core';
import { IStatusApiService } from './status-api.interface';
import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { StatusRoot } from '../domain/status.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatusApiService implements IStatusApiService {
  private readonly _apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  getAllStatus(request: RequestApi): Observable<ResponseApi<StatusRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<StatusRoot>>(url, request, {
      headers: headers,
    });
  }

  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ): Observable<ResponseApi<StatusRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<StatusRoot>>(url, request, {
      headers: headers,
    });
  }
}
