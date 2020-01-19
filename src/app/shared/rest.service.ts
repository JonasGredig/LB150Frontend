import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  endpoint = 'http://localhost:8080/SpringRestExample-0.0.1-SNAPSHOT/api/rest/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'AUTH_API_KEY': 'abcd123456'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoint + 'employee-management/employees')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
