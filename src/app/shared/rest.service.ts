import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Employee} from './employee';
import {Department} from "./department";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  endpoint = 'http://localhost:8080/LB150_war_exploded/api/rest/';
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

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.endpoint + '/employee-management/emloyees/', employee).pipe(
      retry(1),
      catchError(this.handleError));
  }

  likeEmployee(id: number) {
    return this.http.get<Employee>(this.endpoint + 'employee-management/vote/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.endpoint + 'department-management/departments')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addDepartment(department: Department) {
    return this.http.post<Department>(this.endpoint + '/department-management/departments/', department).pipe(
      retry(1),
      catchError(this.handleError));
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
