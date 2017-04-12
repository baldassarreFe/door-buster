import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../core/login.service';
import {ApplicationsService} from '../../core/applications/applications.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  private userDocs: Observable<any[]>;

  private dreaming = 0;
  private applied = 0;
  private ongoing = 0;
  private gotcha = 0;

  constructor(public loginService: LoginService, public applicationsService: ApplicationsService) { }

  ngOnInit(): void {
    this.userDocs =
      this.applicationsService
      .applications$
      .map(this.extractDocs);

    this.applicationsService
      .applications$
      .subscribe(this.counts);
  }

  private extractDocs = (applicationsList) => {
    return [].concat.apply([],
      applicationsList.map(a => a.applied.documents).filter(x => x)
    );
  }

  private counts = (applicationsList) => {
      this.dreaming = applicationsList.filter(a => a.status === 'dreamingOf').length;
      this.applied = applicationsList.filter(a => a.status === 'applied').length;
      this.ongoing = applicationsList.filter(a => a.status === 'ongoing').length;
      this.gotcha = applicationsList.filter(a => a.status === 'gotcha').length;
  }
}
