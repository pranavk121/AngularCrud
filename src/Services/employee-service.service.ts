import { Injectable } from '@angular/core';
// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  // Inject Angular http service
  constructor(private _http: Http) { }

  getEmployees(): Observable<Employee[]> {
    // To convert Observable<Response> to Observable<IEmployee[]>
    // we are using the map operator
    return this._http.get('http://localhost:3000/employees')
        .map((response: Response) => <Employee[]>response.json());
}

getEmployeeByCode(empCode: string): Observable<Employee> {
    return this._http.get("http://localhost:3000/employees/" + empCode)
        .map((response: Response) => <Employee>response.json())
        .catch(this.handleError);
}

handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
}
}
