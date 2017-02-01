import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '.././user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { AuthguardService } from '.././authguard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {
  public currentUser: any = null;
  public uid: string;

  constructor(private af: AngularFire, private as: AuthguardService, private userService: UserService, private route: ActivatedRoute, private location: Location) {
    this.af.auth.subscribe(user => {
      this.currentUser = user;
    })
  }

  ngOnInit() {


    // this.route.params.forEach((urlParameters) => {
    //   this.uid = urlParameters['uid'];
    // });
    // this.currentUser = this.userService.getUser(this.uid)
  }
}
