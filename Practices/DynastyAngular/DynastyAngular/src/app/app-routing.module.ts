
import { AdminGuard } from 'src/guard/admin.guard';
import { StatusComponent } from './status/status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent, canActivate:[AdminGuard]},
  {path: 'employee', loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)},
  {path: 'account', loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule)},
  { path: "**", component: StatusComponent },
  {path: 'account', loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
