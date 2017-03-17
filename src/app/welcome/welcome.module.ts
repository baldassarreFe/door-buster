import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {
}
