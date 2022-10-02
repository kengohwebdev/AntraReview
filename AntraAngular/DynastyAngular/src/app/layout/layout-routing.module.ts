import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guard/auth.guard';


const routes: Routes = [
  {path:'region', loadChildren: () => import('../region/region.module').then(m=>m.RegionModule),canActivate:[AuthGuard], canLoad:[AuthGuard] },
  {path: 'customer', loadChildren: () => import('../customer/customer.module').then(m=>m.CustomerModule),canActivate:[AuthGuard], canLoad:[AuthGuard]},
  {path:'account', loadChildren:()=> import('../account/account.module').then(m=>m.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
