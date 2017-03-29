import {Component, OnInit, Input} from '@angular/core';
import {NewApplicationService} from '../../core/new-application.service';
import {ApplicationsService} from '../../core/applications.service';
import {Deadline} from '../../core/model/deadline';
import {GlassdoorService} from '../../core/glassdoor.service';
import {Company} from '../../core/model/company';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css'],
  providers:[GlassdoorService]
})
export class EditorComponent implements OnInit {

  // errorMessage: string = '';
  // isLoading: boolean = true;
  items: Observable<Company[]>;
  term = new FormControl();

  @Input() a = this.newApplicationService.newApplication();

  constructor(private newApplicationService: NewApplicationService, public applicationsService: ApplicationsService, public glassdoorService:GlassdoorService) { }

  ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(100) //1s after typing
                 .distinctUntilChanged()
                 .filter(s => s !== '')
                 .switchMap(term => this.glassdoorService.search(term));
  }

  private addDreamingDeadline() {
    this.a.dreamingOf.deadlines.push(new Deadline());
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.a); }
}
