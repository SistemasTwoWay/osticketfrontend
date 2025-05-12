import { inject, Injectable } from '@angular/core';
import { IPriorityApiService } from './priority-api.interface';
import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { PriorityRoot } from '../domain/priority.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrioritiesApiService implements IPriorityApiService {
  private readonly _apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  getAllPriorities(request: RequestApi): Observable<ResponseApi<PriorityRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<PriorityRoot>>(url, request, {
      headers,
    });
  }
}
