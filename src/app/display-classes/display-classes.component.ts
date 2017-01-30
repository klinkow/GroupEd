import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-display-classes',
  templateUrl: './display-classes.component.html',
  styleUrls: ['./display-classes.component.css']
})
export class DisplayClassesComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.students = angularFire.database.list('students');
  }
  ngOnInit() {
  }

  getStudents(){
    return this.students;
  }

}
