import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {NavigationComponent} from './navigation/navigation.component';
import {NavLinkComponent} from './navigation/nav-link.component';
import {RouterModule} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule.forRoot()],
  declarations: [NavigationComponent, NavLinkComponent],
  exports: [CommonModule, MaterialModule, NavigationComponent, FlexLayoutModule]
})
export class SharedModule {
}
