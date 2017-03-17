import {Component, OnInit} from '@angular/core';
import {LoginService} from '../core/login.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public userService: LoginService) {
  }

  ngOnInit() {
  }

}
