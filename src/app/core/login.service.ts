import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {User} from './model/user';
import 'rxjs/operator/map';

@Injectable()
export class LoginService {
  public userInfo: Observable<User>;
  public loggedIn$: Observable<boolean>;

  /*
   Use an => function here, otherwise calling
   subscribe(this.userInfoParser)
   will set this to be the Observer and not the class instance

   Alternatively, define the function normally and use
   subscribe(user => this.authEventHandler(user)) in the call
   */
  private userInfoParser = (user): User => {
    return user ? new User(user.uid, user.auth.displayName) : null;
  }

  constructor(private af: AngularFire) {
    this.userInfo = this.af.auth.map(this.userInfoParser);
    this.loggedIn$ = this.userInfo.map(u => !!u);
  }

  public login() {
    this.af.auth.login({provider: AuthProviders.Google});
  }

  public logout() {
    return this.af.auth.logout();
  }
}
