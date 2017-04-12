import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ColumnComponent} from './dashboard/column/column.component';
import {CardComponent} from './dashboard/card/card.component';
import {PopupComponent} from './dashboard/popup/popup.component';
import {CardDetailComponent} from './dashboard/card/card-detail.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {ColumnFilterPipe} from './column-filter.pipe';
import {SalaryPipe} from '../shared/application/salary.pipe';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    ColumnComponent,
    CardComponent,
    CardDetailComponent,
    PopupComponent,
    ColumnFilterPipe
  ]
})
export class HomeModule {
}
