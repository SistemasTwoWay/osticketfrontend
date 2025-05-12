import { Inject, Injectable } from '@angular/core';
import { HTTP_TOPICS_SERVICE } from '../infrastructure/topics.provider';
import { ITopicApiService } from '../infrastructure/topics-api.interface';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';

@Injectable({
  providedIn: 'root',
})
export class TopicsUseCaseService {
  constructor(
    @Inject(HTTP_TOPICS_SERVICE) private _topicsApiService: ITopicApiService
  ) {}

  getAllTopics(request: RequestApi) {
    return this._topicsApiService.getAllTopics(request);
  }

  searchSpecificTopic(request: RequestApi<{ id: number }>) {
    return this._topicsApiService.searchSpecificTopic(request);
  }
}
