import { InjectionToken } from '@angular/core';
import { StatusApiService } from './status-api.service';

export const HTTP_STATUS_SERVICE = new InjectionToken<StatusApiService>(
  'StatusApiService'
);

export const STATUS_PROVIDER = {
  provide: HTTP_STATUS_SERVICE,
  useClass: StatusApiService,
};
