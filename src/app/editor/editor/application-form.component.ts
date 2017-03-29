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
  result: Company[] = [];
  company=[];
  isVisible:string;
  fileInfo:File;
  fileName:string;
  isSelected:string;

  // Progress bar properties
  color = 'primary';
  mode = 'determinate';
  progressValue = 0;
  bufferValue = 25;
  isActiveStep="inactive";

  @Input() a = this.newApplicationService.newApplication();

  constructor(private newApplicationService: NewApplicationService, public applicationsService: ApplicationsService, public glassdoorService:GlassdoorService) { }

  ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(100) //1s after typing
                 .distinctUntilChanged()
                 .switchMap(term => this.glassdoorService.search(term));
  }

  uploadFile(event:EventTarget){
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
            let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
            let files: FileList = target.files;
            this.fileInfo = files[0];
            this.fileName = this.fileInfo.name;
     this.isSelected='selected';
            // console.log(this.fileInfo.name);
  }

  private displayDropdown(status){
    if(status===true){
      this.isVisible='isVisible';
    } else{
      this.isVisible='notVisible';
    }
  }
  private showCompanyInfo(companyInfo){
    this.a.company.businessArea = companyInfo.industry;
    this.a.company.website = companyInfo.website;
  }

  private addDreamingDeadline() {
    this.a.dreamingOf.deadlines.push(new Deadline());
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.a); }
}
