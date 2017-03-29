import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
<navigation [title]="id ? 'Editing' : 'New application'" 
  [buttons]="[{icon:'reply', link:'/home'}]"></navigation>
<application-form [applicationId]="id"></application-form>
`
})
export class MainEditorComponent implements OnInit {
  public id: any;

  public cb =
    () => console.log('top');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.id = params['applicationId'] || null;
    });
  }
}
