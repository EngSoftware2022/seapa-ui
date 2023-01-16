import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  apiURL = 'https://between-friends-api.herokuapp.com/seapa/team/';
  constructor(private http: HttpClient) { }

  createGroup(objectgroup: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL,
        objectgroup
      )
  }

  deleteGroup(idGroup: number) {
    return this.http
    .delete<any>(
      this.apiURL + '?idGrupo=' + idGroup
    )
  }

  deleteMenber(idUser: number, idGroup: number) {
    return this.http
    .delete<any>(
      this.apiURL + 'deletarMembro?idUsuario=' + idUser + '&idGrupo=' + idGroup
    )
  }

  aceptRequest(idUser: number, idGroup: number, isAcept: boolean) {
    return this.http
    .post<any>(
      this.apiURL + 'aceitarConvite?idUsuario=' + idUser + '&idGrupo=' + idGroup + '&aceito=' + isAcept, ''
    )
  }

  getAlliAmAdmin(userId: number) {
    return this.http.get<any>(this.apiURL + 'listaradministracao?idUsuario=' + userId);
  }

  getAllInvites(userId: number) {
    return this.http.get<any>(this.apiURL + 'listarConvites?idUsuario=' + userId);
  }

  getAllMembers(userId: number) {
    return this.http.get<any>(this.apiURL + 'listarmembros?idUsuario=' + userId);
  }

  getAllParticipation(userId: number) {
    return this.http.get<any>(this.apiURL + 'listarparticipacao?idUsuario=' + userId);
  }

  sendRequestToGroup(idGroup: number, idUser: number): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL + 'novomembro?idGrupo=' + idGroup + '&idConvidado=' + idUser,
        ''
      )
  }

  newCenter(idGroup: number) {
    return this.http
      .put<any>(
        this.apiURL + 'novaCentralDeGerenciamento?grupoId=' + idGroup + '&tipoEsporte= ',
        ''
      )
  }
}
