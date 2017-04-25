import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private allow = false;

  constructor(private router: Router, private loginService: LoginService) {
    loginService.loggedIn$.subscribe(logged => this.allow = logged);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.allow) {
      return true;
    } else {
      this.router.navigate(['/welcome'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}

