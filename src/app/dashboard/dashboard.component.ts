import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '.././user.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { AuthguardService } from '.././authguard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})

export class DashboardComponent implements OnInit {
  public currentUser;
  public uid: string;
  public addingClass: boolean = false;

  constructor(private af: AngularFire, private as: AuthguardService, private userService: UserService) {
    this.af.auth.subscribe(user => {
      console.log(user.uid);
      this.uid = user.uid;
    })
    
    this.userService.getUser(this.uid).subscribe(lastData => {
      this.currentUser = lastData;
      console.log(this.currentUser);
    });
  }

  ngOnInit() {  }

  showNewClassForm() {
    this.addingClass = !this.addingClass;
  }
}
