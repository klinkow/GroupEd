
import { Component, Input } from '@angular/core';
import { Class } from '../class.model';
import { AngularFire } from 'angularfire2';



@Component({
  selector: 'newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent {
  @Input() currentUser;
  newClass: Class;

  constructor(private af: AngularFire) { }

  submitForm(name: string, subject: string) {
    var newClass: Class = new Class(name, subject)
    this.af.database.list('/users/' + this.currentUser.$key + '/classes').push(newClass)

  }
}
