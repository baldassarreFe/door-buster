import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <app-navigation [title]="id ? 'Editing' : 'New application'"
                [buttons]="[{icon:'reply', link:'/home'}]"></app-navigation>
    <app-application-form [applicationId]="id"></app-application-form>
  `
})
export class MainEditorComponent implements OnInit {
  public id: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params['applicationId'] || null;
      });
  }
}
