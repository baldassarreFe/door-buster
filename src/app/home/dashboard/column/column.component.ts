import {Component, OnInit, ViewContainerRef, Input} from "@angular/core";
import {ApplicationsService} from "../../../core/applications.service";

@Component({
  selector: 'column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.css']
})
export class ColumnComponent implements OnInit {
	@Input() category: any[] = [];
	constructor(public applicationsService: ApplicationsService) {
	}

	ngOnInit() {
  	}


}