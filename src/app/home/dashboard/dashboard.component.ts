import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from '../../core/applications.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public applicationsService: ApplicationsService) {
  }

  ngOnInit(){	
  }


}


