import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders} from "angularfire2";

@Injectable()
export class LoginService {
  private _userName: string = null;
  private _uid: string = null;
  private _loggedIn: boolean = false;

  public get userName(): string {
    return this._userName;
  }

  public get uid(): string {
    return this._uid;
  }

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  /*
   Use an => function here, otherwise calling
   subscribe(this.authEventHandler)
   will set this to be the Observer and not the class instance

   Alternatively, define the function normally and use
   subscribe(user => this.authEventHandler(user)) in the call
   */
  private authEventHandler = (user) => {
    if (user != null) {
      this._userName = user.auth.displayName;
      this._loggedIn = true;
      this._uid = user.uid;
    } else {
      this._userName = null;
      this._loggedIn = false;
      this._uid = null;
    }
  }

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(this.authEventHandler);
  }

  public login() {
    this.af.auth.login({provider: AuthProviders.Google});
  }

  public logout() {
    return this.af.auth.logout();
  }
}
