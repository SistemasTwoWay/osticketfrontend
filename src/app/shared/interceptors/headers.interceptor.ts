import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.apiKey;

  req = req.clone({
    setHeaders: {
      apikey: apiKey,
    },
  });

  return next(req);
};
