import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canLoad(route: Route): boolean {
    console.log("Guard loads")
    let url: string = route.path;
    // if(check user already logged in) redirect to someother page
    // return false in  the case of dont want to load
    return true;
  }
}
