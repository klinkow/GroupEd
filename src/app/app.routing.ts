import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayClassesComponent } from './display-classes/display-classes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DisplayClassesComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
