import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseApp} from 'angularfire2';
import UploadMetadata = firebase.storage.UploadMetadata;

@Injectable()
export class StorageService {
  private firebaseApp: firebase.app.App;
  private uploadRef: firebase.storage.Reference;

  constructor(private af: AngularFire,
              @Inject(FirebaseApp) firebaseApp: firebase.app.App) {

    this.firebaseApp = firebaseApp;

    this.af.auth.subscribe(user => {
        if (user) {
          this.uploadRef = this.firebaseApp.storage().ref().child(`users/${user.uid}`);
        } else {
          this.uploadRef = null;
        }
      }
    );
  }

  public delete(doc) {
    return this.uploadRef.child(doc.name).delete();
  }

  public uploadPdf(file: File): Promise<any> {
    if (this.uploadRef) {
      const name = file.name.substring(0, file.name.length - 4) + '_' + new Date().toTimeString() + '.pdf';
      return new Promise((resolve, reject) => {
        const metadata: UploadMetadata = {
          contentType: 'application/pdf',
        };
        const uploadTask = this.uploadRef.child(name).put(file, metadata);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', snapshot => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, function(error) {
          // Handle unsuccessful uploads
          reject(error);
        }, function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          resolve({
            name: name,
            link: uploadTask.snapshot.downloadURL
          });
        });
      });
    } else {
      return Promise.reject(new Error('User not authenticated'));
    }
  }
}
