import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {NavigationComponent} from './navigation/navigation.component';
import {NavLinkComponent} from './navigation/nav-link.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule.forRoot(),ReactiveFormsModule],
  declarations: [NavigationComponent, NavLinkComponent],
  exports: [CommonModule, MaterialModule, NavigationComponent, FlexLayoutModule,ReactiveFormsModule]
})
export class SharedModule {
}
