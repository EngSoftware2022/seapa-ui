import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetsService {

  apiUrl = 'https://between-friends-api.herokuapp.com:443/seapa/apostas/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllBetsByGruoup(groupId: number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'todasApostasCadastradas?gropoId=' + groupId);
  }

  public setBet(obj: any): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'apostar/', obj);
  }

  public validateBetBistate(apostaId: any, optionId: any, option: any): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'validarAposta/?apostaId=' + apostaId + '&opcaoVencedoraId=' + optionId + '&opcaoVencedoraString='+ option, '');
  }

  public validateBetRange(apostaId: any, optionId: any): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'validarAposta/?apostaId=' + apostaId + '&opcaoVencedoraId=' + optionId, '');
  }

  public newbet(obj: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'novaAposta', obj);
  }
}
