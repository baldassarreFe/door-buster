import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user = null;
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      this.user = user;
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
