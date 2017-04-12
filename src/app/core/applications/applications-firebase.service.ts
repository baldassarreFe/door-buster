import {Injectable} from '@angular/core';
import {ApplicationsService} from './applications.service';
import {Observable} from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {LoginService} from '../login.service';
import 'rxjs/operator/mergeMap';
import app = firebase.app;

@Injectable()
export class ApplicationsFirebaseService extends ApplicationsService {
  private _applications$: FirebaseListObservable<any[]> | null;
  public applications$: Observable<any[]>;

  constructor(private af: AngularFire, private loginService: LoginService) {
    super();
    this.af.auth.subscribe(user => {
      this._applications$ = this.af.database.list('/users/' + user.uid);
      this.applications$ = <Observable<any>> this._applications$;
    });
  }

  public get(id: string): any {
    return this.af.auth.switchMap(
      user => user ? this.af.database.object(`/users/${user.uid}/${id}`).map(this.replaceNulls) : null);
  }

  // Firebase does not persist null values of empty arrays,
  // so when we retrieve applications we need to manually add them back
  // so that the UI does not crash
  private replaceNulls = (application) => {
    application.dreamingOf.deadlines = application.dreamingOf.deadlines || [];
    application.applied.documents = application.applied.documents || [];
    if (!application.ongoing) {
      application['ongoing'] = {events: []};
    } else {
      application.ongoing.events = application.ongoing.events || [];
    }
    return application;
  }

  public update(key: string, application: any): firebase.Promise<void> {
    if (this._applications$) {
      if (key) {
        return this._applications$.update(key, application);
      } else {
        return this._applications$.push(application);
      }
    }
  }

  public delete(key: string): firebase.Promise<void> {
    if (this._applications$) {
      return this._applications$.remove(key);
    }
  }
}
