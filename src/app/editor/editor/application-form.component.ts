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
import {StorageService} from '../../core/storage.service';

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
  company = [];
  isSelected: string;
  resultStatus:string;
  resultText:string;

  get progressValue() {
    switch (this.a.status) {
      case 'dreamingOf':
        return 25;
      case 'applied':
        return 50;
      case 'ongoing':
        return 75;
      case 'gotcha':
        return 100;
    }
  }

  @Input() public applicationId;

  public a: any;
  private temporaryDocs = [];

  constructor(public newApplicationService: NewApplicationService,
              public applicationsService: ApplicationsService,
              public glassdoorService: GlassdoorService,
              private storageService: StorageService,
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
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    const file = files[0];
    this.isSelected = 'selected';
    console.log(file.name);
    const uploadTask = this.storageService.uploadPdf(file)
      .then(doc => {
        this.temporaryDocs.push(doc);
      })
      .catch(error => alert(error.message));
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
    this.a.applied.documents = this.a.applied.documents.concat(this.temporaryDocs);
    this.temporaryDocs = [];
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

  
  private cancelEdits() {
    Promise.all(this.temporaryDocs.map(
      this.storageService.delete
    )).then(() => this.router.navigate(['/home']));
  }

  /*
   test(event: Event) {
   console.log(event.target['value']);
   }
   */
}
