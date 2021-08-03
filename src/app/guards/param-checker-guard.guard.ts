import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamCheckerGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!route.queryParams.hasOwnProperty('name') || route.queryParams.name === ''){
        // redirect back, same as returning false here(since we only have 2 pages)
        return this.router.createUrlTree(['/home']);
      }
      return true;
  
    }
}
