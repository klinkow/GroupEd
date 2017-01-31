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
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


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
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
