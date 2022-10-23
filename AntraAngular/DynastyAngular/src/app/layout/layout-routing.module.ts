import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate, CanLoad } from '@angular/router';
import { AuthGuard } from 'src/guard/auth.guard';
import { ChildGuard } from 'src/guard/child.guard';
import { HomeComponent } from '../home/home.component';



const routes: Routes = [
  {
    path: 'region',
    loadChildren: () =>
      import('../region/region.module')
        .then(m => m.RegionModule),
    canActivateChild: [ChildGuard],
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],


  },
  {
    path: 'customer',
    canLoad : [AuthGuard],
    loadChildren: () => import('../customer/customer.module')
      .then(m => m.CustomerModule),
    // canActivate: [AuthGuard],
    // canLoad: [AuthGuard],
    canActivateChild: [ChildGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../account/account.module')
        .then(opt => opt.AccountModule),

  },
  {
    path: 'home', component: HomeComponent,
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
