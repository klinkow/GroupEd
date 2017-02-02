import { Component, OnInit, Output } from '@angular/core';
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
  public classes;
  public uid: string;
  public addingClass: boolean = false;

  constructor(private af: AngularFire, private as: AuthguardService, private userService: UserService) {
    this.af.auth.subscribe(user => {
      this.uid = user.uid;
    })

    this.userService.getUser(this.uid).subscribe(lastData => {
      this.currentUser = lastData;
    });

    this.af.database.list('/users/' + this.uid + '/classes').subscribe(lastData => {
      this.classes = lastData;
    })
  }

  ngOnInit() {  }

  toggleNewClassForm() {
    this.addingClass = !this.addingClass;
  }
}
