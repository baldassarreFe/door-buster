import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {NavigationComponent} from './navigation/navigation.component';
import {NavLinkComponent} from './navigation/nav-link.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    NavigationComponent,
    NavLinkComponent,
    SpinnerComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavigationComponent,
    SpinnerComponent,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
