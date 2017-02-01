import { Component, OnInit } from '@angular/core';
import { Class } from '../class.model';


@Component({
  selector: 'newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent implements OnInit {
  newClass: Class;
  students = [{name: "sally"}, {name: "harry"}, {name:"bill"}];


  constructor() { }

  submitForm(name: string, subject: string, period: number) {
  var newClass: Class = new Class(name, [], [], subject, 0, period);
  // this.user.classes.push(newClass);
}


  // onSubmit(formData){
  //   console.log(formData);
  //   if(formData.valid){
  //     this.newClass = new Class(formData.value.newClassName, formData.value.newClassSubject, formData.value.newClassPeriod, formData.value.student.selected, 0, 0);
  //     this.fuckingStudents.push(this.newClass);
  //   }
  // }

  // this.students.filter(_ => _.selected).forEach(_ => { ... })

  ngOnInit() {
  }

}
