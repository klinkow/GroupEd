import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { StudentService } from '../student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-display-classes',
  templateUrl: './display-classes.component.html',
  styleUrls: ['./display-classes.component.css'],
  providers: [StudentService]
})
export class DisplayClassesComponent implements OnInit {
  students: FirebaseListObservable<any[]>;
  constructor(private router: Router, private studentService: StudentService) {
    // this.students = angularFire.database.list('students');
  }
  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  // getStudents(){
  //   return this.students;
  // }
  //
  // goToDetailPage(clickedStudent) {
  //   this.router.nativate('students', clickedStudent.$key);
  // }

}
