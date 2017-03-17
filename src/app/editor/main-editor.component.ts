import {Component} from '@angular/core';

@Component({
  template: `
<navigation title="Edit" [buttons]="[{icon:'save', action: cb}]"></navigation>
<application-form></application-form>
`
})
export class MainEditorComponent {
  public cb = () => {
    console.log('top');
  }
}
