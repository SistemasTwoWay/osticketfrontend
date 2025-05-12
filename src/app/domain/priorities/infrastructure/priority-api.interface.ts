import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { PriorityRoot } from '../domain/priority.model';

export interface IPriorityApiService {
  getAllPriorities(request: RequestApi): Observable<ResponseApi<PriorityRoot>>;
}
