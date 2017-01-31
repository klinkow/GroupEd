import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private af: AngularFire, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/']);
      })
    }
  }

  ngOnInit() {}

  // constructor(public af: AngularFire){
  //   this.af.auth.subscribe(auth => console.log(auth));
  // }
  //
  // login() {
  //   this.af.auth.login({email: email.value, password: 'password'});
  // }
  //
  // logout() {
  //    this.af.auth.logout();
  // }
  //
  // ngOnInit() {
  // }

}
