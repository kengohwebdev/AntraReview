import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionRoutingModule } from './region-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { RegionService } from 'src/services/region.service';



@NgModule({
  declarations: [
    AddRegionComponent,
    EditRegionComponent,
    ListRegionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegionRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    RegionService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ]
})
export class RegionModule { }
