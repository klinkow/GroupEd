import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { Group } from './group.model';
import { Student } from './student.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class StudentService {
  students: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.students = angularFire.database.list('students');
  }
  getStudents(){
    return this.students;
  }

}
