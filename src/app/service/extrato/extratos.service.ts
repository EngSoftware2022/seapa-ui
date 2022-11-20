import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratosService {

  apiUrl = 'http://localhost:8080/swagger-ui-html';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }) 
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSaldo(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + '/extrato');
  }
}
