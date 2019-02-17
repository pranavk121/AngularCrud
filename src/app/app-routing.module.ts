import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { PageNotFoundComponent } from '../shared/page-not-found.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from '../shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { EmployeeService } from '../Services/employee-service.service';

const appRoutes :Routes = [
  {path:'list', component:ListEmployeesComponent},
  {path:'create', component:CreateEmployeeComponent},
  {path:'', redirectTo:'/list', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    ListEmployeesComponent,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective
  ],
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(appRoutes), BsDatepickerModule.forRoot()],
  exports: [RouterModule],
  providers:[EmployeeService]
})
export class AppRoutingModule { }