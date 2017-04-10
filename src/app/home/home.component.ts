import {Component} from "@angular/core";

@Component({
  template: `
    <navigation title="Door Buster!" [buttons]="icons"></navigation>
    <dashboard></dashboard>
  `
})
export class HomeComponent {
  public icons = [{icon: 'note_add', link: '/editor'}, {icon: 'account_circle', link: '/profile'}];
}
