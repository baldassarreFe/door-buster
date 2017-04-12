import {Component, OnInit, Input} from "@angular/core";


@Component({
  selector: 'card-detail',
  templateUrl: 'card-detail.component.html',
  styleUrls: ['card.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() status:String;
  @Input() job:any[]=[];
  constructor() {
  }

  ngOnInit() {
  }

}


