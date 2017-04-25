import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Overlay} from 'angular2-modal';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() job: any;
  @Input() key: String;

  constructor(private router: Router,
              overlay: Overlay,
              vcRef: ViewContainerRef,
              public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  public close(cardKey: string) {
    document.getElementById(cardKey).style.display = 'none';
  }

}


