import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { UserI } from 'app/src/app/modules/techunter/interface/UserI';
import { environment } from 'environments/environment.development';
import { response } from 'express';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #http = inject(HttpClient);
  #register_url = signal(environment.apiAuthUrl+'/register')
  #login_url = signal(environment.apiAuthUrl+'/login')

  #header: HttpHeaders = new HttpHeaders();
  header = this.#header.append('Content-Type', 'application/json');

  public httpRegisterUser(user: UserI): Observable<HttpResponse<UserI>>{
    return this.#http.post<UserI>(this.#register_url(), user, {
      headers:this.#header, observe: "response"}).pipe(
      shareReplay()
    )
  }

  public httpLoginUser(user: UserI): Observable<any>{
    return this.#http.post<UserI>(this.#login_url(),
    user)
  }
}

