import {Component, OnInit} from '@angular/core';
import {LoginService} from '../core/login.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
  private destination: string = null;

  constructor(public userService: LoginService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.destination = params['returnUrl'];
    });
    userService.loggedIn$.subscribe(logged => {
        if (logged && this.destination) {
          this.router.navigate([this.destination]);
        }
      }
    );
  }
}
