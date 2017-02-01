import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayClassesComponent } from './display-classes/display-classes.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';
import { GroupMakerComponent } from './group-maker/group-maker.component'


const appRoutes: Routes = [

  {
    path: 'groupmaker',
    component: GroupMakerComponent
  },

  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'display-classes',
    component: DisplayClassesComponent
  },
  {
    path: 'display-students',
    component: DisplayStudentsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
