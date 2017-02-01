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
  public toggleClassForm: boolean = false;
  constructor(private router: Router, private angularFire: AngularFire) {
    // this.angularFire.database.list('/users', { preserveSnapshot: true})
    //     .subscribe(snapshots=>{
    //         snapshots.forEach(snapshot => {
    //           this.classes.push(snapshot.val());
    //         });
    //     })
    // this.classes = angularFire.database.list('users');
  }
  ngOnInit() { }

  // getStudents(){
  //   return this.students;
  // }
  //
  // goToDetailPage(clickedStudent) {
  //   this.router.nativate('students', clickedStudent.$key);
  // }


  toggleClass() {
    this.toggleClassForm = !this.toggleClassForm;
    console.log(this.toggleClassForm)
  }

cardColor() {
  var colors = ["blue","red","orange","yellow","purple","green"];
  return colors[Math.floor(Math.random()*colors.length)];
}

smlasses : Class[] = [
new Class("Class 1", [], [], "Math", 3, 5),
new Class("Class 2", [], [], "Math", 3, 5),
new Class("Class 3", [], [], "Math", 3, 5),
new Class("Class 4", [], [], "Math", 3, 4)
]
}
