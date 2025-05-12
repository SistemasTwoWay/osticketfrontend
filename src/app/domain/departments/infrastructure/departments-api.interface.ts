import { Observable } from 'rxjs';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';
import { ResponseApi } from '../../../shared/interfaces/response-api.interface';
import { DepartmentRoot } from '../domain/department.model';

export interface IDepartmentApiService {
  searchSpecificDepartment(
    request: RequestApi<{ id: number }>
  ): Observable<ResponseApi<DepartmentRoot>>;
  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ): Observable<ResponseApi<DepartmentRoot>>;
  sortBy(request: RequestApi): Observable<ResponseApi<DepartmentRoot>>;
}
