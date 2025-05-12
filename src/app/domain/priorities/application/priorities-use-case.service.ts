import { Inject, Injectable } from '@angular/core';
import { HTTP_PRIORITY_SERVICE } from '../infrastructure/priority.provider';
import { IPriorityApiService } from '../infrastructure/priority-api.interface';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';

@Injectable({
  providedIn: 'root',
})
export class PrioritiesUseCaseService {
  constructor(
    @Inject(HTTP_PRIORITY_SERVICE)
    private _priorityApiService: IPriorityApiService
  ) {}

  getAllPriorities(request: RequestApi) {
    return this._priorityApiService.getAllPriorities(request);
  }
}
