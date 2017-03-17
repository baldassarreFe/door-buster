import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainEditorComponent} from './main-editor.component';

const routes: Routes = [
  {path: '', component: MainEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
}
