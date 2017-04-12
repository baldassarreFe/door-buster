import {Component, OnInit, ViewContainerRef, Input} from "@angular/core";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {ApplicationsService} from "../../../core/applications/applications.service";
import {Router} from "@angular/router";


@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
  @Input() job: any[] = [];
  public jobKey:String;
  constructor(public applicationsService: ApplicationsService,
              private router: Router,
              overlay: Overlay,
              vcRef: ViewContainerRef,
              public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  public edit(key: string) {
    // console.log(key);
    this.router.navigate(['/editor'], { queryParams: { applicationId: key } });
    event.stopPropagation();
  }

  public delete(key: string, companyName: string) {
    this.modal.confirm()
      .size('lg')
      .isBlocking(true)
      .showClose(false)
      .title(`Do you want to delete: ${companyName}?`)
      .body('Deletion operations are not recoverable, are you sure you want to delete this application?')
      .okBtn('DELETE')
      .okBtnClass('btn btn-danger')
      .cancelBtn('Cancel')
      .open()
      .then(dialog => {
        dialog.result.then(choice => {
          this.applicationsService.delete(key);
        }, () => {});
      });
    event.stopPropagation();
  }

  public popup(cardKey: string) {
    document.getElementById(cardKey).style.display = 'block';
    this.jobKey = cardKey;
    return false;
  }

}


