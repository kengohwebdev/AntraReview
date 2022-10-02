import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  { path: 'list', component: ListCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
