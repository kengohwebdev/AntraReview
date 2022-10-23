import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate  {
  constructor(private router:Router,private accountService:AccountService){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if(localStorage.hasOwnProperty("token"))
      {
       let token = localStorage.getItem("token");
       return true;
      }
      else{
       this.router.navigateByUrl("login")
       return false;
      }

 }
 
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.hasOwnProperty("token"))
      {
       let token = localStorage.getItem("token");
       return true;
      }
      else{
        this.router.navigateByUrl("login")
       return false;
      }
  }


}