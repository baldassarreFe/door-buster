import {Injectable, Inject} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import {LoginService} from '../login.service';
import {FirebaseStorage} from './firebase-storage';
import {LogoStorage} from './logo.service';
import UploadMetadata = firebase.storage.UploadMetadata;

@Injectable()
export class FirebaseLogoService extends FirebaseStorage implements LogoStorage {
  private metadata: UploadMetadata = {
    contentType: 'image/jpeg',
  };

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App,
              private loginService: LoginService) {
    super(firebaseApp);
    this.loginService.userInfo.subscribe(user => {
      if (user) {
        this.storageRef = this.firebaseApp.storage().ref().child(`users/${user.uid}/company-logo`);
      } else {
        this.storageRef = null;
      }
    });
  }

  public deleteLogo(url): Promise<any> {
    return this.deleteByUrl(url);
  }

  public uploadLogo(file: File): Promise<any> {
    return this.upload(file, this.metadata);
  }
}
