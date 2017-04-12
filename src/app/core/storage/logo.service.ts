import {OpaqueToken} from '@angular/core';

// This interface will be injected as a service, but we can't put @Injectable() here.
// This is because typescript interfaces will be gone at runtime and Angular
// would not know what to inject, the solution is to use an opaque token
// http://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2
export const LogoService = new OpaqueToken('LogoService');

export interface LogoStorage {
  deleteLogo(link): Promise<any>;
  uploadLogo(file: File): Promise<any>;
}
