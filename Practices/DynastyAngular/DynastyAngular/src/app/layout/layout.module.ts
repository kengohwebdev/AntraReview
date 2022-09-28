import { EmployeeModule } from './../employee/employee.module';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './routing-layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';






@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    EmployeeModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutRoutingModule
  ],
  exports:[],
  bootstrap:[DashboardComponent]
})
export class LayoutModule { }