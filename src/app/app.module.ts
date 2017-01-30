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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
