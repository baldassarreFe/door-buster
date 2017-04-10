import {Component, Input} from "@angular/core";

@Component({
  selector: 'nav-icon-link',
  template: `
    <ng-container *ngIf="link">
      <a [routerLink]="link" routerLinkActive="active">
        <md-icon class="icon">{{icon}}</md-icon>
      </a>
    </ng-container>
    <ng-container *ngIf="action">
  <span style="cursor: pointer" (click)="action()">
    <md-icon class="icon">{{icon}}</md-icon>
  </span>
    </ng-container>
  `,
  styles: [`
    span, a {
      margin-left: 5px;
    }
  `, `
    .icon {
      color: white;
      text-decoration: none;
    }
  `]
})
export class NavLinkComponent {

  @Input() icon: string;
  @Input() link: string;
  @Input() action: () => void;

  constructor() {
  }
}
