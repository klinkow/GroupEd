import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../class.model';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent implements OnInit {
  newClass: Class;
  students = [{name: "sally"}, {name: "harry"}, {name:"bill"}];
  @Input() currentUser;


  constructor(private af: AngularFire) { }

  submitForm(name: string, subject: string, period: number) {
  var newClass: Class = new Class(name, [], [], subject, 0, period);
  this.af.database.list('users').update(this.currentUser, {
    class: newClass
  });
}

  ngOnInit() {
  }

}
