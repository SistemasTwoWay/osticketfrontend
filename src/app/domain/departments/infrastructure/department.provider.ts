import { InjectionToken } from '@angular/core';
import { DepartmentApiService } from './department-api.service';

export const HTTP_DEPARTMENT_SERVICE = new InjectionToken<DepartmentApiService>(
  'DepartmentApiService'
);

export const DEPARTMENT_PROVIDER = {
  provide: HTTP_DEPARTMENT_SERVICE,
  useClass: DepartmentApiService,
};
