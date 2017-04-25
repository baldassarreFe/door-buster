import {ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import {NewApplicationService} from '../../core/applications/new-application.service';
import {ApplicationsService} from '../../core/applications/applications.service';
import {Deadline} from '../../core/model/deadline';
import {Event} from '../../core/model/event';
import {GlassdoorService} from '../../core/glassdoor.service';
import {Company} from '../../core/model/company';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Reminder} from '../../core/model/reminder';
import {DocumentService} from '../../core/storage/document.service';
import {LogoService} from '../../core/storage/logo.service';
import {DocumentServiceToken} from '../../core/storage/document.token';
import {LogoServiceToken} from '../../core/storage/logo.token';

@Component({
  selector: 'app-application-form',
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
  tempLogoDel = [];

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
              @Inject(DocumentServiceToken) private documentService: DocumentService,
              @Inject(LogoServiceToken) private logoService: LogoService,
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

  deleteFile(url) {
    this.documentService.deleteDoc(url)
      .then(deletedUrl => {
        this.a.applied.documents = this.temporaryDocs.filter(d => d.link !== deletedUrl);
        this.temporaryDocs = this.temporaryDocs.filter(d => d.link !== deletedUrl);
      })
      .catch(console.log);
  }

  uploadFile(event: EventTarget) {
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    const file = files[0];
    this.documentService.uploadDoc(file)
      .then(doc => {
        this.temporaryDocs.push(doc);
        target.value = '';
      })
      .catch(error => alert(error.message));
  }

  uploadLogo(event: EventTarget) {
    const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    const files: FileList = target.files;
    const file = files[0];
    this.logoService.uploadLogo(file)
      .then(logo => {
        this.a.company.squareLogo = logo.link;
        target.value = '';
      })
      .catch(error => alert(error.message));
  }

  removeLogo(link) {
    this.a.company.squareLogo = '';
    if (link.match('firebasestorage')) {
      this.tempLogoDel.push({'link': link});
    }
    console.log(this.tempLogoDel);
  }

  get dropdownVisible(): boolean {
    return this._dropdownVisible;
  }

  set dropdownVisible(value: boolean) {
    // HACK to prevent the dropdown to disappear
    // before a click on it is performed
    setTimeout(() => this._dropdownVisible = value, 100);
  }

  public showCompanyInfo(companyInfo) {
    // TODO see if we can do: this.a.company = companyInfo
    // console.log('Clicked on', companyInfo.name);
    this.a.company.name = companyInfo.name;
    this.a.company.businessArea = companyInfo.industry;
    this.a.company.website = companyInfo.website;
    this.a.company.squareLogo = companyInfo.squareLogo;
  }

  public addDreamingDeadline() {
    this.a.dreamingOf.deadlines.push(new Deadline());
  }

  public addReminder(deadline) {
    deadline.reminder = new Reminder();
  }

  public addOngoingEvents() {
    this.a.ongoing.events.push(new Event());
  }

  public saveApplication() {
    this.a.applied.documents = this.a.applied.documents.concat(this.temporaryDocs);
    this.temporaryDocs = [];
    for (let i = this.tempLogoDel.length - 1; i >= 0; i--) {
      this.logoService.deleteLogo(this.tempLogoDel[i].link);
    }
    this.applicationsService.update(this.applicationId, this.a)
      .then(() => this.router.navigate(['/home']));
  }

  public get resultText() {
    switch (this.a.gotcha.outcome) {
      case 'thinking':
        return 'What are you waiting for?';
      case 'accept':
        return 'Time to party!';
      case 'rejected':
        return 'This is not the end of the world. Keep moving on!';
      case 'refuse':
        return 'Follow that little voice inside your head';
      default:
        return 'What\'s gonna happen with this application?';
    }
  }


  public cancelEdits() {
    Promise
      .all(this.temporaryDocs.map(this.documentService.deleteDoc))
      .then(() => this.router.navigate(['/home']));
  }
}
