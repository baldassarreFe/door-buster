import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from '../../core/applications.service';
import {Router} from "@angular/router";


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public applicationsService: ApplicationsService,
              private router: Router
              ) {
  }

  ngOnInit() {
  }

  public edit(key: string) {
    //console.log(key);
    this.router.navigate(['/editor'], { queryParams: { applicationId: key } });
    event.stopPropagation();

  }

  public popup(cardKey:string) {
    document.getElementById(cardKey).style.display = "block";
    return false;
  }

  public close(cardKey:string){
    document.getElementById(cardKey).style.display = "none";
  }

}


