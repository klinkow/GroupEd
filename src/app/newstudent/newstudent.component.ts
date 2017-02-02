import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
  @Input() currentUser;
  @Output() newStudentSender = new EventEmitter();
  newStudent: Student;

  constructor(private af: AngularFire) { }

  submitForm(name: string, mathScore: number, readingScore: number, treehouseScore: number) {
  var newStudent: Student = new Student(name, mathScore, readingScore, treehouseScore);
  // this.af.database.list('users').update(this.currentUser, {
  //   students: newStudent
  // });
  this.newStudentSender.emit(newStudent)
}
  ngOnInit() {
  }

}
