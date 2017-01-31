import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayClassesComponent } from './display-classes/display-classes.component';
import { GroupMakerComponent } from './group-maker/group-maker.component'

const appRoutes: Routes = [
  {
    path: '',
    component: DisplayClassesComponent
  }, {
    path: 'groupmaker',
    component: GroupMakerComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
