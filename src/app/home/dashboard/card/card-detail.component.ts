import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.component.html',
  styleUrls: ['card.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() status: String;
  @Input() job: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}


