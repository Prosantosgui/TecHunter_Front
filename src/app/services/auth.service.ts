import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { UserI } from 'app/src/app/modules/techunter/interface/UserI';
import { environment } from 'environments/environment.development';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #http = inject(HttpClient);
  #url = signal(environment.apiAuthUrl+'/register')

  #header: HttpHeaders = new HttpHeaders();
  header = this.#header.append('Content-Type', 'application/json');

  public httpPostUser(user: UserI): Observable<HttpResponse<UserI>>{
    return this.#http.post<UserI>(this.#url(), user, {
      headers:this.#header, observe: "response"}).pipe(
      shareReplay()
    )
  }
}
