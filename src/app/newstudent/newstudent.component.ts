import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {
  newStudent: Student;

  constructor() { }

  submitForm(name: string, mathScore: number, readingScore: number, treehouseScore: number) {
  var newStudent: Student = new Student(name, mathScore, readingScore, treehouseScore);
  // this.user.students.push(newStudent);
}
  ngOnInit() {
  }

}
