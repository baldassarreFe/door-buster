import {Component} from '@angular/core';

@Component({
  template: `
<navigation title="Door Buster!" [buttons]="[{icon:'account_circle', link:'/profile'}, {icon:'note_add', link:'/editor'}]"></navigation>
<dashboard></dashboard>
`
})
export class HomeComponent {
}
