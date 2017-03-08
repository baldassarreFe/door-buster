import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {DoorBusterUserService} from "./door-buster-user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private doorBusterUserService: DoorBusterUserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.doorBusterUserService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/welcome'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}

