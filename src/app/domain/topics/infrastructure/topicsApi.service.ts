import { inject, Injectable } from '@angular/core';
import { ITopicApiService } from './topics-api.interface';
import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { TopicRoot } from '../domain/topics.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TopicsApiService implements ITopicApiService {
  private readonly _apiUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);

  getAllTopics(request: RequestApi): Observable<ResponseApi<TopicRoot>> {
    const url = `${this._apiUrl}`;
    const headers = new HttpHeaders();
    return this._http.get<ResponseApi<TopicRoot>>(url, { headers });
  }
}
