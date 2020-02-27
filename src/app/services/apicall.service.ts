import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http : HttpClient) { }

  public get(url) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    console.log(url);
    return this.http.get(url, httpOptions);
  }


  public postWAu(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':'Token' + " " +auth_token
      })
    }
    console.log(url);
    return this.http.post(url, data, httpOptions);
  }

  public put(url, data) {
    console.log(url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization':'Token' + " " +auth_token
      })
    }
    return this.http.put(url, data, httpOptions);
  }

  public delete(url) {

    console.log(url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization':'Token' + " " +auth_token
      })
    }
    
    return this.http.delete(url);
  }
}
