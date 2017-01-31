import { Component, OnInit, } from '@angular/core';
import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-group-maker',
  templateUrl: './group-maker.component.html',
  styleUrls: ['./group-maker.component.css'],
  // providers: [
  //   provide(FirebaseArray,
  //     {
  //       useValue: new FirebaseListObservable(
  //         new Firebase("https://console.firebase.google.com/project/grouped-c0b2d/database/data").asArray()
  //       }
  //     )
  // ]
})



export class GroupMakerComponent implements OnInit {
  // private user: FirebaseArray;
  students: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.students = angularFire.database.list('students');
  }
  ngOnInit() {
  }

  getStudents(){
    return this.students;
  }

//   getPloodents(){
//     return this.angularFire.database.object('students');
//   }
//
//   // ploodents : [];
//   //
//   // ploodents.push(this.getPloodents());
//
//   numberOfGroups : number;
//   numberOfStudents : number = ploodents.length;
//
//   randomizeStudents(students) {
//
//     var currentIndex : number = students.length
//     var temporaryValue : Student;
//     var randomIndex : number = 0;
//
//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//
//       temporaryValue = students[currentIndex];
//       students[currentIndex] = students[randomIndex];
//       students[randomIndex] = temporaryValue;
//     }
//     return students;
//   }
//
//
//   sortDescending(students) {
//     var studentsSorted : Student[] = [];
//
//     for (var i = 5; i > -1; i--) {
//       students.forEach((student) => {
//         if (student.number === i) {
//           studentsSorted.push(student);
//         };
//       });
//     };
//     return studentsSorted;
//   }
//
//
//   snakeStudents(students) {
//     var studentsSnaked : Student[] = [];
//     var tempArray : Student[] = [];
//
//     for (var j = 0; students.length >= this.numberOfGroups; j++) {
//       for (var l = 0; l < this.numberOfGroups; l++) {
//         if (students[0]) {
//           studentsSnaked.push(students[0]);
//         };
//         if (students[this.numberOfGroups]) {
//           tempArray.push(students[this.numberOfGroups]);
//         };
//         students.shift();
//       };
//       if (tempArray[0]) {
//         tempArray.reverse();
//         tempArray.forEach((element) => {
//           studentsSnaked.push(element)
//         });
//         if (students[this.numberOfGroups-1]) {
//           students.splice(0, this.numberOfGroups);
//         };
//         tempArray = [];
//       };
//     };
//     return studentsSnaked;
//   }
//
//
//   makeGroupsHetero(students) {
//     var groups : Group[] = [];
//
//     for (var n = 0; n < this.numberOfGroups; n++) {
//       groups.push(new Group("group".concat((n+1).toString()), []));
//     };
//
//     for (var m = 0; m < Math.ceil(this.numberOfStudents/this.numberOfGroups); m++) {
//       for (var k = 0; k < this.numberOfGroups; k++) {
//         if (students) {
//           groups[k].students.push(students[k]);
//         };
//       };
//       students.splice(0, this.numberOfGroups);
//     };
//     return groups;
//   }
//
//   makeGroupsHomogenous(students) {
//     var groups : Group[] = [];
//     for (var n = 0; n < this.numberOfGroups; n++) {
//       groups.push(new Group("group".concat((n+1).toString()), []));
//     };
//     for (var o = 0; o < this.numberOfGroups; o++) {
//       for(var p = 0; p < this.numberOfStudents/this.numberOfGroups; p++) {
//         if (students[p]) {
//           groups[o].students.push(students[p]);
//         };
//       };
//       students.splice(0, this.numberOfStudents/this.numberOfGroups);
//     };
//     return groups;
//   }
//
//   makeGroupsHomogenouslyPlusStar(students) {
//     var groups : Group[] = [];
//     for (var n = 0; n < this.numberOfGroups; n++) {
//       groups.push(new Group("group".concat((n+1).toString()), []));
//     };
//     for (var q = 0; q < this.numberOfGroups; q++) {
//       groups[q].students.push(students[(this.numberOfGroups-1)-q])
//     };
//     students.splice(0, this.numberOfGroups);
//
//     for (var r = 0; r < this.numberOfGroups; r++) {
//       for(var s = 0; s < (this.numberOfStudents/this.numberOfGroups) - 1; s++) {
//         if (students[s]) {
//           groups[r].students.push(students[s]);
//         };
//       };
//       students.splice(0, (this.numberOfStudents/this.numberOfGroups)-1);
//     };
//     groups.forEach((group) => {
//       console.log("GROUPS STAR");
//       console.log(group.name);
//       console.log(group.students);
//     });
//     return groups;
//   }
//
//   groupHeterogeneously(students) {
//     this.makeGroupsHetero(this.snakeStudents(this.sortDescending(this.randomizeStudents(students))));
//   }
//
//   groupHomogeneously(students) {
//     this.makeGroupsHomogenous(this.sortDescending(this.randomizeStudents(students)));
//   }
//
//   groupHomogenouslyPlusStar(students) {
//     this.makeGroupsHomogenouslyPlusStar(this.sortDescending(this.randomizeStudents(students)));
//   }
//
}
