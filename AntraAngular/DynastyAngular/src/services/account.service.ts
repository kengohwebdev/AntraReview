import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  signUp(singup:any):Observable<any>{
    return this.httpClient.post(environment.apiKey+environment.apiControllers.accountsignup,singup);
  }

  login(loginModel:any):Observable<any>{
    return this.httpClient.post(environment.apiKey+environment.apiControllers.accountlogin,loginModel);
  }
}