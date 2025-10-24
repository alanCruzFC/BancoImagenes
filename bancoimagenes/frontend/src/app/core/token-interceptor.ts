// core/token-interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;
  return next(authReq);
};


