import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDogVK8K6fxGwQNAKv5_vL7xmv7kkpuJn8",
  authDomain: "door-buster.firebaseapp.com",
  databaseURL: "https://door-buster.firebaseio.com",
  storageBucket: "door-buster.appspot.com",
  messagingSenderId: "861150742247"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
