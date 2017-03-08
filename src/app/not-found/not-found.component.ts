import {Component} from "@angular/core";

@Component({
  template: `
<h3>404 - You are fired!</h3>
<p>Seriously, you should not be here, why don't you start from the beginning?</p>
<a md-raised-button color="warn" routerLinkActive="active" routerLink="/welcome">Go back</a>
`
})
export class NotFoundComponent {
}
