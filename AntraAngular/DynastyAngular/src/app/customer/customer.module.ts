import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';


@NgModule({
  declarations: [
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[CustomerService, 
   
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]
})
export class CustomerModule { }
