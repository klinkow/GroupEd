import { Component, OnInit } from '@angular/core';
import { UserService } from '.././user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {
  public uid: string;
  public currentUser: FirebaseObjectObservable<any>;

  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.uid = urlParameters['uid'];
    });

    this.currentUser = this.userService.getUser(this.uid)
  }
}
