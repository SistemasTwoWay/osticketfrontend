import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TICKET_API_PROVIDER } from './domain/tickets/infrastructure/ticket.provider';
import { headersInterceptor } from './shared/interceptors/headers.interceptor';
import { DEPARTMENT_PROVIDER } from './domain/departments/infrastructure/department.provider';
import { PRIORITY_PROVIDER } from './domain/priorities/infrastructure/priority.provider';
import { STATUS_PROVIDER } from './domain/status/infrastructure/status.provider';
import { TOPICS_PROVIDER } from './domain/topics/infrastructure/topics.provider';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzIcons(icons),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([headersInterceptor, loaderInterceptor])
    ),
    // custom providers
    DEPARTMENT_PROVIDER,
    PRIORITY_PROVIDER,
    STATUS_PROVIDER,
    TICKET_API_PROVIDER,
    TOPICS_PROVIDER,
  ],
};
