
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/guard/authguard.guard';


;

const routes: Routes = [
  {path: 'employee', loadChildren: () => import('../employee/employee.module').then(m=>m.EmployeeModule)},
  {path:'account', loadChildren:()=> import('../account/account.module').then(m=>m.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }