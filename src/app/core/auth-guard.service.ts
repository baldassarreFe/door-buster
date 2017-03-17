import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/welcome'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}

