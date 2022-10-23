
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/Material.Module';
import { RegionModule } from '../region/region.module';
import { CustomerModule } from '../customer/customer.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule,
    RegionModule,
    CustomerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  exports:[],
  bootstrap:[DashboardComponent]
})
export class LayoutModule { }
