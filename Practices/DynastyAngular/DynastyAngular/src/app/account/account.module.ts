import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AccountService } from 'src/services/account.service';
import { RoutingAccountModule } from './routing-account.module';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingAccountModule,
    FormsModule
    
  ],
  providers:[AccountService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]

})
export class AccountModule { }