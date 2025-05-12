import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { StatusRoot } from '../domain/status.model';

export interface IStatusApiService {
  getAllStatus(request: RequestApi): Observable<ResponseApi<StatusRoot>>;
  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ): Observable<ResponseApi<StatusRoot>>;
}
