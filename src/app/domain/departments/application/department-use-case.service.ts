import { Inject, Injectable } from '@angular/core';
import { HTTP_DEPARTMENT_SERVICE } from '../infrastructure/department.provider';
import { IDepartmentApiService } from '../infrastructure/departments-api.interface';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentUseCaseService {
  constructor(
    @Inject(HTTP_DEPARTMENT_SERVICE)
    private _departmentApiService: IDepartmentApiService
  ) {}

  searchSpecificDepartment(request: RequestApi<{ id: number }>) {
    return this._departmentApiService.searchSpecificDepartment(request);
  }

  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ) {
    return this._departmentApiService.searchByDateRange(request);
  }

  sortBy(request: RequestApi) {
    return this._departmentApiService.sortBy(request);
  }
}
