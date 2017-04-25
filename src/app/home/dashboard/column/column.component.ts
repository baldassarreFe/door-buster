import {Component, Input, OnInit} from '@angular/core';
import {ApplicationsService} from '../../../core/applications/applications.service';

@Component({
  selector: 'app-column',
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
