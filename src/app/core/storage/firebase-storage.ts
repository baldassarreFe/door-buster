import {Inject} from '@angular/core';
import {FirebaseApp} from 'angularfire2';
import * as firebase from 'firebase/app';
import UploadMetadata = firebase.storage.UploadMetadata;

export abstract class FirebaseStorage {
  protected storageRef: firebase.storage.Reference = null;

  private static timestampName(filename: string): string {
    const splitHere = filename.lastIndexOf('.');
    return filename.substring(0, splitHere) + '_' + new Date().toTimeString() + filename.substring(splitHere);
  }

  constructor(@Inject(FirebaseApp) protected firebaseApp: firebase.app.App) {
  }

  public deleteByName(name): Promise<any> {
    if (this.storageRef) {
      return new Promise((reject, resolve) => {
        this.storageRef.child(name)
          .delete()
          .then(() => resolve(name))
          .catch(err => reject(err));
      });
    } else {
      return Promise.reject(new Error('No storage ref set'));
    }
  }

  public deleteByUrl(url): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseApp.storage().refFromURL(url)
        .delete()
        .then(() => resolve(url))
        .catch(err => reject(err));
    });
  }

  // When a file is uploaded, we append a timestamp to its name, to avoid collisions in the remote storage.
  // However, note that the name we return from the function is the original name of the file, as from
  // the user's filesystem
  public upload(file: File, metadata: UploadMetadata) {
    if (this.storageRef) {
      return new Promise((resolve, reject) => {
        const name = FirebaseStorage.timestampName(file.name);
        const uploadTask = this.storageRef.child(name).put(file, metadata);

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
        }, function (error) {
          // Handle unsuccessful uploads
          reject(error);
        }, function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          resolve({
            name: file.name,
            link: uploadTask.snapshot.downloadURL
          });
        });
      });
    } else {
      return Promise.reject(new Error('No storage ref set'));
    }
  }
}
