import {InjectionToken} from '@angular/core';
import {DocumentService} from './document.service';

// This interface will be injected as a service, but we can't put @Injectable() here.
// This is because typescript interfaces will be gone at runtime and Angular
// would not know what to inject, the solution is to use an opaque token
// http://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2
// or its "evolution" the InjectionToken
// https://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html
export const DocumentServiceToken = new InjectionToken<DocumentService>('DocumentServiceToken');
