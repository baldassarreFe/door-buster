import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {NavigationComponent} from './navigation/navigation.component';
import {NavLinkComponent} from './navigation/nav-link.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpinnerComponent} from './spinner/spinner.component';
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {ApplicationStatusPipe} from './application/application-status.pipe';
import {SalaryPipe} from './application/salary.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule.forRoot(),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    NavigationComponent,
    NavLinkComponent,
    SpinnerComponent,
    ApplicationStatusPipe,
    SalaryPipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavigationComponent,
    SpinnerComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    ModalModule,
    BootstrapModalModule,
    ApplicationStatusPipe,
    SalaryPipe
  ]
})
export class SharedModule {
}
