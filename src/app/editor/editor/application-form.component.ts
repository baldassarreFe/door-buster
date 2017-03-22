import {Component, OnInit, Input} from '@angular/core';
import {NewApplicationService} from '../../core/new-application.service';
import {ApplicationsService} from '../../core/applications.service';
import {Deadline} from '../../core/model/deadline';

@Component({
  selector: 'application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css']
})
export class EditorComponent implements OnInit {

  @Input() a = this.newApplicationService.newApplication();

  constructor(private newApplicationService: NewApplicationService, public applicationsService: ApplicationsService) { }

  ngOnInit() {
  }

  private addDreamingDeadline() {
    this.a.dreamingOf.deadlines.push(new Deadline());
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.a); }
}
