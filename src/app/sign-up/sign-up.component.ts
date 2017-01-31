import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private router: Router) {
    this.users = af.database.list('users');
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.af.database.list('users').update(success.auth.uid, {
          name: formData.value.name
        });
        this.router.navigate(['/dashboard'])
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      })
    }
  }

  ngOnInit() {
  }

}
