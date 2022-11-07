import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Define API
  apiURL = 'https://betweenfriend-user-manager.herokuapp.com/api/';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API post() method => Create employee
  createUser(user: any): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL + '/register',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  findUser(userName : string){
    return this.http.get<any>(this.apiURL+'/getByName/'+userName
    )
    .pipe(retry(1), catchError(this.handleError));
  }
}

