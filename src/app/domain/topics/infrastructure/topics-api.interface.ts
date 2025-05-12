import { Observable } from 'rxjs';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { TopicRoot } from '../domain/topics.model';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';

export interface ITopicApiService {
  getAllTopics(request: RequestApi): Observable<ResponseApi<TopicRoot>>;
}
