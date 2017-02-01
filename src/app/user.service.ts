import { Injectable, Input } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
  constructor(private af: AngularFire) {
  }

  getUser(uid: string) {
    return this.af.database.object('/users/' + uid);
  }
}
