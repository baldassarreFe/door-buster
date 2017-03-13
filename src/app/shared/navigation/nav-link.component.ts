import {Component, Input} from "@angular/core";

@Component({
  selector: 'nav-icon-link',
  template: `
<a [routerLink]="link" routerLinkActive="active">
  <md-icon class="icon">{{icon}}</md-icon>
</a>
`,
  styles: [`
.icon {
  padding: 0 14px;
  color: white;
  text-decoration: none;
}
`]
})
export class NavLinkComponent {

  @Input() icon: string;
  @Input() link: string;

  constructor() {
  }
}
