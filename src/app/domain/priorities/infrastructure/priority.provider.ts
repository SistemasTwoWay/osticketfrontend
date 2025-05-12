import { InjectionToken } from '@angular/core';
import { PrioritiesApiService } from './priorities-api.service';

export const HTTP_PRIORITY_SERVICE = new InjectionToken<PrioritiesApiService>(
  'PrioritiesApiService'
);

export const PRIORITY_PROVIDER = {
  provide: HTTP_PRIORITY_SERVICE,
  useClass: PrioritiesApiService,
};
