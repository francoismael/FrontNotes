import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');

    if (token) {

      return true;
    } else {
      return this.router.createUrlTree(['/auth/login']);
    }
  }
}
