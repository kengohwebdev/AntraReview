import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate,  CanLoad {
  constructor(private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
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