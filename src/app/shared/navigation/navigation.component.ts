import {Component, Input} from '@angular/core';
import {LoginService} from '../../core/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styles: ['.spacer {flex: 1 1 auto;}']
})
export class NavigationComponent {

  @Input() title = 'Navigation';
  @Input() buttons: any[] = [];

  constructor(public userService: LoginService) {
  }

}
