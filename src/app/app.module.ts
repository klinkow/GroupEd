import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { GroupMakerComponent } from './group-maker/group-maker.component';
import { DisplayGroupsComponent } from './display-groups/display-groups.component';
import { DisplayClassesComponent } from './display-classes/display-classes.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';

import { AngularFireModule, AuthProviders, AuthMethods, FIREBASE_PROVIDERS, AngularFire, } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashComponent } from './splash/splash.component';

import { NewclassComponent } from './newclass/newclass.component';


import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthguardService } from './authguard.service';
import { UserService } from './user.service';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    GroupMakerComponent,
    DisplayGroupsComponent,
    DisplayClassesComponent,
    StudentDetailComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    SplashComponent,

    NewclassComponent

    SidebarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [AuthguardService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
