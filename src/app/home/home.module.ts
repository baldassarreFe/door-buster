import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    NavigationComponent
  ]
})
export class HomeModule {
}
