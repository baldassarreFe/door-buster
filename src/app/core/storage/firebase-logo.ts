import {Inject, Injectable} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import {LoginService} from '../login.service';
import {FirebaseStorage} from './firebase-storage';
import {LogoService} from './logo.service';
import UploadMetadata = firebase.storage.UploadMetadata;

@Injectable()
export class FirebaseLogoService extends FirebaseStorage implements LogoService {
  private metadata: UploadMetadata = {
    contentType: 'image/jpeg',
  };

  constructor(@Inject(FirebaseApp) firebaseApp: any,
              private loginService: LoginService) {
    // see README to understand this casting
    super(<firebase.app.App> firebaseApp);
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
