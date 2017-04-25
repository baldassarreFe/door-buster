import {Component} from '@angular/core';

@Component({
  template: `
    <app-navigation title="Door Buster!" [buttons]="icons"></app-navigation>
    <app-dashboard></app-dashboard>
  `
})
export class HomeComponent {
  public icons = [
    {icon: 'note_add', link: '/editor'},
    {icon: 'account_circle', link: '/profile'},
    {icon: 'info_outline', link: '/about'}
  ];
}
