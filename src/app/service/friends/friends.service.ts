import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  apiURL = 'https://between-friends-api.herokuapp.com/seapa/conviteAmizade/';
  constructor(private http: HttpClient) { }

  sendRequestToUser(userRequest: any, userFriend: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL +"/novoConvite/solicitanteId="+ userRequest + '&solicitadoId=' + userFriend,
        '',
      )
  }

  getAllRequest(userRequest: any): Observable<any> {
    return this.http
      .get<any>(
        this.apiURL + 'solicitanteId=' + userRequest
      )
  }

  aceptRequest(requestId: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL +"/atualizaConviteAmizade/conviteId="+ requestId + '&statusConvite=ACEITO',
        '',
      )
  }

  rejectRequest(requestId: any,): Observable<any> {
    return this.http
    .post<any>(
      this.apiURL +"/atualizaConviteAmizade/conviteId="+ requestId + '&statusConvite=REJEITADO',
      '',
    )
  }

}
