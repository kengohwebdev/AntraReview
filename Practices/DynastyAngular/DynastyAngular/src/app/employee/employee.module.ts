import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeService } from 'src/services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    EmployeeRoutingModule,
    FormsModule

  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
