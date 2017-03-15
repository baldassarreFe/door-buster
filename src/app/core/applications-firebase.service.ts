import {Injectable} from '@angular/core';
import {ApplicationsService} from './applications.service';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';
import {LoginService} from './login.service';
import 'rxjs/operator/mergeMap';

@Injectable()
export class ApplicationsFirebaseService extends ApplicationsService {
  public applications$: Observable<any[]>;

  constructor(private af: AngularFire, private loginService: LoginService) {
    super();
    this.af.auth.subscribe(this.authEventHandler);
  }

  private authEventHandler = (user) => {
    this.applications$ = user != null ? this.af.database.list('/users/' + user.uid) : Observable.of([]);
  }
}
