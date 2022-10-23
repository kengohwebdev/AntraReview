import { ParseTreeResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditRegionComponent } from 'src/app/region/edit-region/edit-region.component';

@Injectable({
  providedIn: 'root'
})
export class RegionEditCanDeactivateGuard implements CanDeactivate<EditRegionComponent> {
  canDeactivate(
    component: EditRegionComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = currentState.url;
      console.log('Url: '+ url);

      // if (!component.isUpdating && component.editRegionForm.dirty) {
      //   component.isUpdating = false;
      //   return false;
      // }
      return true;
  }
  
}
