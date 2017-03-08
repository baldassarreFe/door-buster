import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {
}
