import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {EditorRoutingModule} from './editor-routing.module';
import {EditorComponent} from './editor/application-form.component';
import {MainEditorComponent} from './main-editor.component';

@NgModule({
  imports: [SharedModule, EditorRoutingModule, FormsModule],
  declarations: [
    MainEditorComponent, EditorComponent
  ]
})
export class EditorModule {
}
