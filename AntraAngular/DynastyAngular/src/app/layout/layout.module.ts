import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/Material.Module';
import { RegionModule } from '../region/region.module';
import { CustomerModule } from '../customer/customer.module';
import { HttpClientModule } from '@angular/common/http';
import { AccessModule } from '../access/access.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RegionModule,
    CustomerModule,
    RouterModule,
    AccessModule,
    HttpClientModule
  ],
  exports:[],
  bootstrap:[DashboardComponent]
})
export class LayoutModule { }
