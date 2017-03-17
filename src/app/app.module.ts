import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {WelcomeModule} from './welcome/welcome.module';
import {Router} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    WelcomeModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
