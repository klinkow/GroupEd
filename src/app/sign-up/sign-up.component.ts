import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthguardService } from '.././authguard.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Output() uid: string;

  constructor(private af: AngularFire, private router: Router, private authService: AuthguardService) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          this.af.database.list('users').push({
              blame: formData.value.userName
          });
        console.log(success);
        this.uid = success.auth.uid;
        this.router.navigate(['/dashboard'])
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/signup']);
      })
    }
  }

  ngOnInit() {
  }

}
