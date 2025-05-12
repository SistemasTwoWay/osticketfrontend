import { InjectionToken } from '@angular/core';
import { TopicsApiService } from './topicsApi.service';

export const HTTP_TOPICS_SERVICE = new InjectionToken<TopicsApiService>(
  'TopicsApiService'
);

export const TOPICS_PROVIDER = {
  provide: HTTP_TOPICS_SERVICE,
  useClass: TopicsApiService,
};
