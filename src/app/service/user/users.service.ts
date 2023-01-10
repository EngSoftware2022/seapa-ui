import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = 'https://between-friends-api.herokuapp.com/seapa/contasUsuarios/';
  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL,
        user,
      )
  }

  getAll(): Observable<any> {
    return this.http
      .get<any>(
        this.apiURL,
      )
  }

  editUser(user: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL,
        user,
      )
  }


  findUser(userName: string) {
    return this.http.get<any>(this.apiURL + 'nomeUsuario?nomeUsuario=' + userName);
  }

  login(user: string, password: string) {
    return this.http.get<any>(this.apiURL + 'signin?usuario=' + user + '&senha=' + password);
  }

  findUserById(id: string) {
    return this.http.get<any>(this.apiURL + 'id?id=' + id);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(this.apiURL + id);
  }
}

