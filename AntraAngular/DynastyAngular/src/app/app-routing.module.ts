import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/guard/admin.guard';
import { BuilderComponent } from './builder/builder.component';


import { DashboardComponent } from './layout/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: "login", loadComponent: () => import('./canlogin/canlogin.component')
  .then(opt => opt.CanLoginComponent) },
  {
    path: "access",
    loadChildren: () =>
      import('./access/access.module')
        .then(opt => opt.AccessModule)
  },
  { path : 'builder', component: BuilderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
