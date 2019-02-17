import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../Services/employee-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService) { }

  // Call the getEmployees() service method of EmployeeService
  // using the private variable _employeeService
  ngOnInit() {
    this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData);
  }
}