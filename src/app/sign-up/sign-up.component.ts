import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { AuthguardService } from '.././authguard.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  constructor(private af: AngularFire, private router: Router, private authService: AuthguardService) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.af.database.list('users').update(success.auth.uid, {
          name: formData.value.name,
          userName: formData.value.userName,
          email: formData.value.email
        });
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/signup']);
      });
    }
  }
}
