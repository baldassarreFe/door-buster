import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {ApplicationsService} from './applications/applications.service';
import {NewApplicationService} from './applications/new-application.service';
import {ApplicationsFirebaseService} from './applications/applications-firebase.service';
import {JsonpModule} from '@angular/http';
import {LogoServiceToken} from 'app/core/storage/logo.token';
import {FirebaseLogoService} from './storage/firebase-logo';
import {DocumentServiceToken} from './storage/document.token';
import {FirebaseDocumentService} from './storage/firebase-document';

const firebaseConfig = {
  apiKey: 'AIzaSyDogVK8K6fxGwQNAKv5_vL7xmv7kkpuJn8',
  authDomain: 'door-buster.firebaseapp.com',
  databaseURL: 'https://door-buster.firebaseio.com',
  storageBucket: 'door-buster.appspot.com',
  messagingSenderId: '861150742247'
};

@NgModule({
  imports: [
    JsonpModule,
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
        {provide: LogoServiceToken, useClass: FirebaseLogoService},
        {provide: DocumentServiceToken, useClass: FirebaseDocumentService},
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
