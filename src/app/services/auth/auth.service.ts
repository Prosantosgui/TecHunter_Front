import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { UserI } from 'app/src/app/modules/techunter/interface/UserI';
import { environment } from 'environments/environment.development';
import { Observable, shareReplay } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #http = inject(HttpClient);
  #register_url = signal(environment.apiAuthUrl+'/register')
  #login_url = signal(environment.apiAuthUrl+'/login')
  #local_storage = inject(LocalStorageService);

  #header: HttpHeaders = new HttpHeaders();
  ignore = this.#header.append('IgnoreInterceptor', 'true');


  public httpRegisterUser(user: UserI): Observable<HttpResponse<UserI>>{
    return this.#http.post<UserI>(this.#register_url(), user, {
      headers:{
        'IgnoreInterceptor' : 'true'
      }, observe: "response"}).pipe(
      shareReplay()
    )
  }

  public httpLoginUser(user: UserI): Observable<any>{
    return this.#http.post<UserI>(this.#login_url(),
    user,{
      headers: {
        'IgnoreInterceptor' : 'true'
      }
    })
  }

  public getAuthorizationToken(){
    try{
      let token = this.#local_storage.get("UserToken")
      return token;
    }catch(error){
      console.error(error)
      return null;
    }
  }
}

