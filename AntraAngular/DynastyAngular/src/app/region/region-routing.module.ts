import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionEditCanDeactivateGuard } from 'src/guard/region-edit-can-deactivate.guard';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { ListRegionComponent } from './list-region/list-region.component';


const routes: Routes = [
  { path: 'list', component: ListRegionComponent },
  { path: 'add', component: AddRegionComponent },
  {
    path: 'edit/:id', component: EditRegionComponent,
    canDeactivate: [RegionEditCanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
