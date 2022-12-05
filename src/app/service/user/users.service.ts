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
        this.apiURL + 'usuarios',
      )
  }


  findUser(userName: string) {
    return this.http.get<any>(this.apiURL + '/getByName/' + userName);
  }

  login(user: string, password: string) {
    return this.http.get<any>(this.apiURL + 'signin/usuario=' + user + '&senha=' + password);
  }
}

