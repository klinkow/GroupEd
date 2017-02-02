import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { UserService } from '../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-display-classes',
  templateUrl: './display-classes.component.html',
  styleUrls: ['./display-classes.component.css'],
  providers: [UserService]
})
export class DisplayClassesComponent implements OnInit {
  @Input() currentUser;
  @Input() classes;
  public selectedClass = null;
  public toggleClassForm: boolean = false;
  public hidden = true;
  constructor(private router: Router, private af: AngularFire) {}

  ngOnInit() { }

  showClass(clickedClass) {
    this.af.database.list('/users/' + this.currentUser.$key + '/classes/' + clickedClass.$key + '/students').subscribe(lastData => {
      clickedClass.students = lastData;
      this.selectedClass = clickedClass;
      console.log(clickedClass);
    })
  }

  toggleClass() {
    this.toggleClassForm = !this.toggleClassForm;
    console.log(this.toggleClassForm)
  }

  deleteClass() {
    this.hidden = false;
    // console.log(this.toggleClassForm)
  }
}
