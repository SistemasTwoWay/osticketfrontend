import { Inject, Injectable } from '@angular/core';
import { HTTP_STATUS_SERVICE } from '../infrastructure/status.provider';
import { IStatusApiService } from '../infrastructure/status-api.interface';
import { RequestApi } from '../../../shared/interfaces/request-api.interface';

@Injectable({
  providedIn: 'root',
})
export class StatusUseCaseService {
  constructor(
    @Inject(HTTP_STATUS_SERVICE) private _statusApiService: IStatusApiService
  ) {}

  getAllStatus(request: RequestApi) {
    return this._statusApiService.getAllStatus(request);
  }

  searchByDateRange(
    request: RequestApi<{ start_date: string; end_date: string }>
  ) {
    return this._statusApiService.searchByDateRange(request);
  }
}
