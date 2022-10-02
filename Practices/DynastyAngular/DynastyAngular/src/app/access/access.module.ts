import { UserService } from './../Service/user.service';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers:[UserService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ]
})
export class AccessModule { }
