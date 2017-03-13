import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {NavigationComponent} from "./navigation/navigation.component";
import {NavLinkComponent} from "./navigation/nav-link.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [NavigationComponent, NavLinkComponent],
  exports: [CommonModule, MaterialModule, NavigationComponent]
})
export class SharedModule {
}
