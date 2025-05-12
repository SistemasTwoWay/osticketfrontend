import { Injectable } from '@angular/core';
import {
  NzNotificationContentType,
  NzNotificationService,
} from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private notification: NzNotificationService) {}

  public showNotification(
    type: 'success' | 'info' | 'warning' | 'error' | 'blank',
    title: string,
    content: NzNotificationContentType
  ): void {
    this.notification.create(type, title, content);
  }
}
