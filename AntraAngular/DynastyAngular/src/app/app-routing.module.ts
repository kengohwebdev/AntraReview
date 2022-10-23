import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guard/auth.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {
    canLoad : [AuthGuard],
    path: '', component: DashboardComponent
    ,canActivate: [AuthGuard]

  },
  // {
  //   path: '**', component: StatusComponent,
  // },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
