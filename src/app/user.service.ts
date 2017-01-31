import { Injectable, Input } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
  @Input() uid: string;

  user: FirebaseObjectObservable<any>;
  
  constructor(private af: AngularFire) {
    this.user = af.database.object('/users/' + this.uid);
  }
}
