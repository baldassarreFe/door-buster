import {Component, OnInit} from "@angular/core";
import {DoorBusterUserService} from "../core/door-buster-user.service";

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(public userService: DoorBusterUserService) {
  }

  ngOnInit() {
  }

}
