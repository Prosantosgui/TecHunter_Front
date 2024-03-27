import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { PositionI } from 'app/src/app/modules/techunter/interface/PositionI';
import { environment } from 'environments/environment.development';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  #http = inject(HttpClient);
  #position_url = signal(environment.apiUrl+'/positions')

  #setListPositions = signal<PositionI[] | null>(null);
  public getListTask = this.#setListPositions.asReadonly();

  public httpGetPositions$() : Observable<PositionI[]>{

    return this.#http.get<PositionI[]>(this.#position_url()).pipe(
      shareReplay(),
      tap((res) => this.#setListPositions.set(res))
    );
  }
}
