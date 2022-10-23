import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string= environment.apiKey;


  constructor(private httpClient:HttpClient) { }

  signUp(singup:any):Observable<any>{
    return this.httpClient.post(this.url+environment.apiControllers.accountsignup,singup);
  }

  login(loginModel:any):Observable<any>{
    return this.httpClient.post(this.url+environment.apiControllers.accountlogin,loginModel);
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';
  }
}