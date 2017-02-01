import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayClassesComponent } from './display-classes/display-classes.component';
import { GroupMakerComponent } from './group-maker/group-maker.component'
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { AuthguardService } from './authguard.service';

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
    path: 'classes',
    component: ClassesComponent
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
