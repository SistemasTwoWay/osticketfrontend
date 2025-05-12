import { inject, Injectable } from '@angular/core';
import { IDepartmentApiService } from './departments-api.interface';
import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { DepartmentRoot } from '../domain/department.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentApiService implements IDepartmentApiService {
  private readonly _apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  searchSpecificDepartment(
    request: RequestApi<{ id: number }>
  ): Observable<ResponseApi<DepartmentRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<DepartmentRoot>>(url, request, {
      headers,
    });
  }

  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ): Observable<ResponseApi<DepartmentRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<DepartmentRoot>>(url, request, {
      headers,
    });
  }

  sortBy(request: RequestApi): Observable<ResponseApi<DepartmentRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.post<ResponseApi<DepartmentRoot>>(url, request, {
      headers,
    });
  }
}
