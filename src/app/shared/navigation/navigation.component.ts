import {Component, Input} from "@angular/core";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styles: ['.spacer {flex: 1 1 auto;}']
})
export class NavigationComponent {

  @Input() title: string = 'Navigation';
  @Input() links: any[] = [];

  constructor() {

  }
}
