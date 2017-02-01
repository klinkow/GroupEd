import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private af: AngularFire, private router: Router) { }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }

  goToDashBoard(user) {
   this.router.navigate(['dashboard', user.uid]);
 }
}
