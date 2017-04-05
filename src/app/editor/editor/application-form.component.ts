import {Component, OnInit, Input, NgZone, ChangeDetectorRef} from "@angular/core";
import {NewApplicationService} from "../../core/new-application.service";
import {ApplicationsService} from "../../core/applications.service";
import {Deadline} from "../../core/model/deadline";
import {Event} from "../../core/model/event";
import {GlassdoorService} from "../../core/glassdoor.service";
import {Company} from "../../core/model/company";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: 'application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css'],
  providers: [GlassdoorService]
})
export class EditorComponent implements OnInit {

  private _dropdownVisible: boolean;

  // errorMessage: string = '';
  // isLoading: boolean = true;
  autocompletions: Observable<Company[]>;
  term = new FormControl();
  result: Company[] = [];
  company = [];
  isVisible: string;
  fileInfo: File;
  fileName: string;
  isSelected: string;
  resultStatus:string;
  resultText:string;

  /*
   * TODO refactor this so that we only use an indexer 1-2-3-4,
   * progress bar is at 25*idx
   * and the steps are on if they match that number
   */
  // Progress bar properties
  color = 'primary';
  mode = 'determinate';
  progressValue = 25;
  bufferValue = 25;
  stepActive = 'step1';
  step1: boolean = true;
  step2: boolean;
  step3: boolean;
  step4: boolean;

  @Input() applicationId;

  public a: any;

  constructor(public newApplicationService: NewApplicationService,
              public applicationsService: ApplicationsService,
              public glassdoorService: GlassdoorService,
              private router: Router,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.applicationId) {
      this.applicationsService
        .get(this.applicationId)
        .subscribe(a => {
          this.a = a;
          // don't know why, angular does not detect this change automatically
          this.ref.detectChanges();
        });
    } else {
      this.a = this.newApplicationService.newApplication();
    }
    this.autocompletions = this.term.valueChanges
      .distinctUntilChanged()
      .debounceTime(500) // wait after typing
      .filter(s => s && s.length > 2)
      // .do(console.log)
      .switchMap(term => this.glassdoorService.search(term));
  }

  uploadFile(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.fileInfo = files[0];
    this.fileName = this.fileInfo.name;
    this.isSelected = 'selected';
    // console.log(this.fileInfo.name);
  }

  get dropdownVisible(): boolean {
    return this._dropdownVisible;
  }

  set dropdownVisible(value: boolean) {
    // HACK to prevent the dropdown to disappear
    // before a click on it is performed
    setTimeout(() => this._dropdownVisible = value, 20);
  }

  private showCompanyInfo(companyInfo) {
    // TODO see if we can do: this.a.company = companyInfo
    console.log('Clicked on', companyInfo.name);
    this.a.company.name = companyInfo.name;
    this.a.company.businessArea = companyInfo.industry;
    this.a.company.website = companyInfo.website;
    this.a.company.squareLogo = companyInfo.squareLogo;
  }

  private addDreamingDeadline() {
    this.a.dreamingOf.deadlines.push(new Deadline());
  }

  private addOngoingEvents() {
    this.a.ongoing.events.push(new Event());
  }

  private saveApplication() {
    this.applicationsService.update(this.applicationId, this.a)
      .then(() => this.router.navigate(['/home']));
  }

  private addJobResult(result){
    if(result==='thinking'){
      this.resultStatus='thinking';
      this.resultText='What are you waiting for?';
      this.a.gotcha.outcome='thinking';
    } else if(result==='accept'){
      this.resultStatus='accept';
      this.resultText='Time to party!';
      this.a.gotcha.outcome='accept';
    }else if(result==='rejected'){
      this.resultStatus='rejected';
      this.resultText='This is not the end of the world. Keep moving on!';
      this.a.gotcha.outcome='rejected';
    } else if(result==='refuse'){
      this.resultText='Follow that little voice inside your head';
      this.resultStatus='refuse';
      this.a.gotcha.outcome='refuse';
    }
  }

  // Move from one step to another
  moveTo(stepTarget) {
    this.stepActive = stepTarget;
    if (stepTarget === 'step1') {
      this.progressValue = 25;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step1 = true;
    } else if (stepTarget === 'step2') {
      this.progressValue = 50;
      this.step1 = false;
      this.step3 = false;
      this.step4 = false;
      this.step2 = true;
    } else if (stepTarget === 'step3') {
      this.progressValue = 75;
      this.step1 = false;
      this.step2 = false;
      this.step4 = false;
      this.step3 = true;
    } else {
      this.progressValue = 100;
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = true;
    }
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.a);
  }

  /*
   test(event: Event) {
   console.log(event.target['value']);
   }
   */
}
