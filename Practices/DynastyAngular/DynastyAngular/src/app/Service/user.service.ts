import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  signUp(signup:any):Observable<any>{
    return this.httpClient.post(environment.apiKey+environment.apiControllers.accountsignup,signup);
  }

  login(loginModel:any):Observable<any>{
    return this.httpClient.post(environment.apiKey+environment.apiControllers.accountlogin,loginModel);
  }


  
}
