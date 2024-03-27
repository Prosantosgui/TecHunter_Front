import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 // private storage: Storage;

  constructor() {
   // this.storage = window.localStorage;
  }

  set(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string | null{
      return localStorage.getItem(key);
  }

  remove(key: string): boolean {
    if (localStorage) {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
