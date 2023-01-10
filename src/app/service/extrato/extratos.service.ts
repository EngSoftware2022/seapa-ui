import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratosService {

  apiUrl = 'https://between-friends-api.herokuapp.com:443/seapa/carteira/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTransations(userId: number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'extrato/todasAsMovimentacoes?usuarioId=' + userId);
  }

  public deposit(userId: number, value: number): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'deposito?usuarioId=' + userId + '&valorDeposito=' + value, '');
  }
  
  public getLastTransations(userId: number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'extrato/ultimasMovimentacoes?usuarioId=' + userId);
  }

  public getBalance(userId: number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'saldo?usuarioId=' + userId);
  }

  public withdraw(userId: number, value: number): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'saque?usuarioId=' + userId + '&valorDeposito=' + value, '');
  }

}
