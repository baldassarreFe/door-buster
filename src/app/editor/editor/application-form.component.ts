import {Component, OnInit, Input} from '@angular/core';
import {NewApplicationService} from '../../core/new-application.service';

@Component({
  selector: 'application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css']
})
export class EditorComponent implements OnInit {

  @Input() a = this.newApplicationService.newApplication();

  private powers = ['a', 'b', 'c'];

  constructor(private newApplicationService: NewApplicationService) { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.a); }
}
