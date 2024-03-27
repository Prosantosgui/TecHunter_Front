import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

 const authService = inject(AuthService);

   let token : string | null = authService.getAuthorizationToken();
   let ignoreInterceptor = req.headers.get('IgnoreInterceptor');

   if(token!=null && ignoreInterceptor === null){
     const newHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`)

     const reqClone = req.clone( {'headers' : newHeaders});
     console.log(reqClone);

     return next(reqClone);
   }

   return next(req);
};
