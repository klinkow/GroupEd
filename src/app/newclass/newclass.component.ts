
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Class } from '../class.model';
import { Student } from '../student.model';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})

export class NewclassComponent {
  @Input() currentUser;
  @Output() formSubmitSender = new EventEmitter();
  newClass: Class;
  students: Student[] = [];

  constructor(private af: AngularFire) { }

  submitForm(name: string, subject: string) {
    var newClass: Class = new Class(name, subject);
    var newKey: string;
    this.af.database.list('/users/' + this.currentUser.$key + '/classes').push(newClass).then((schmlass) => {
      newKey = schmlass.key;
      console.log(newKey);
      console.log('/users/' + this.currentUser.$key + '/classes/' + newKey + '/students');
      this.students.forEach((student) => {
        this.af.database.list('/users/' + this.currentUser.$key + '/classes/' + newKey + '/students').push(student);
      })

    });
    this.formSubmitSender.emit()
  }

  addStudent(student: Student) {
    this.students.push(student);
    console.log(this.students)
  }
}
