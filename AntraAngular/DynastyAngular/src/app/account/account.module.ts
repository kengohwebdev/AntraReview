import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/services/account.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { MaterialModule } from 'src/Material.Module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  providers:[AccountService,
  {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]
})
export class AccountModule { }
