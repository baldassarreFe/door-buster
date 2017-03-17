import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';
import {AuthMethods, AngularFireModule, AuthProviders} from 'angularfire2';
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {ApplicationsService} from './applications.service';
import {ApplicationsMockService} from './applications-mock.service';
import {NewApplicationService} from './new-application.service';
import {ApplicationsFirebaseService} from './applications-firebase.service';

const firebaseConfig = {
  apiKey: 'AIzaSyDogVK8K6fxGwQNAKv5_vL7xmv7kkpuJn8',
  authDomain: 'door-buster.firebaseapp.com',
  databaseURL: 'https://door-buster.firebaseio.com',
  storageBucket: 'door-buster.appspot.com',
  messagingSenderId: '861150742247'
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ]
})
export class CoreModule {
  // https://angular.io/docs/ts/latest/guide/ngmodule.html#!#prevent-reimport-of-the-_coremodule_
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoginService,
        {provide: ApplicationsService, useClass: ApplicationsFirebaseService},
        NewApplicationService,
        AuthGuard
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
