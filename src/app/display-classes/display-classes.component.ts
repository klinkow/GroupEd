import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-display-classes',
  templateUrl: './display-classes.component.html',
  styleUrls: ['./display-classes.component.css'],
  providers: [UserService]
})
export class DisplayClassesComponent implements OnInit {
  classes: FirebaseListObservable<any[]>;
  constructor(private router: Router, private angularFire: AngularFire) {
    this.angularFire.database.list('/users', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              this.classes.push(snapshot.val());
            });
        })
    this.classes = angularFire.database.list('users');  }
  ngOnInit() { }

  // getStudents(){
  //   return this.students;
  // }
  //
  // goToDetailPage(clickedStudent) {
  //   this.router.nativate('students', clickedStudent.$key);
  // }

}
