import {Inject, Injectable} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import {LoginService} from '../login.service';
import {FirebaseStorage} from './firebase-storage';
import {DocumentService} from './document.service';
import UploadMetadata = firebase.storage.UploadMetadata;

@Injectable()
export class FirebaseDocumentService extends FirebaseStorage implements DocumentService {
  private metadata: UploadMetadata = {
    contentType: 'application/pdf',
  };

  constructor(@Inject(FirebaseApp) firebaseApp: any,
              private loginService: LoginService) {
    // see README to understand this casting
    super(<firebase.app.App> firebaseApp);
    this.loginService.userInfo.subscribe(user => {
      if (user) {
        this.storageRef = this.firebaseApp.storage().ref().child(`users/${user.uid}`);
      } else {
        this.storageRef = null;
      }
    });
  }

  public deleteDoc(url): Promise<any> {
    return this.deleteByUrl(url);
  }

  public uploadDoc(file: File): Promise<any> {
    return this.upload(file, this.metadata);
  }
}
