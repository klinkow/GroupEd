import { Component, OnInit, } from '@angular/core';
import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-group-maker',
  templateUrl: './group-maker.component.html',
  styleUrls: ['./group-maker.component.css'],
})



export class GroupMakerComponent implements OnInit {
  students: Student[] = [];
  ploodents: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.angularFire.database.list('/students', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              this.students.push(snapshot.val());
            });
        })
    this.ploodents = angularFire.database.list('students');



  }
  ngOnInit() {

  }

  runFunctionClick : boolean = false;

  runFunction() {
    console.log(this.students);
    this.groupHeterogeneously(this.students);
  }

  show() {
      this.runFunctionClick = true;
  }

  getStudents(){
    return this.ploodents;
  }

  // subject: string;
  numberOfGroups : number;
  numberOfStudents : number = this.students.length;

  submitHeterogeneously(subject: string, numberOfGroups: number) {
    //if subject === "math", student.mathScore
    //if subject === "reading", look at student.readingScore
    //if subject === "treehouse", look at student.treehouseScore

  }
  submitHomogenously(subject: string, numberOfGroups: number) {

    // implement the input data to function;
  }
  submitHomogenouslyPlusStar(subject: string, numberOfGroups: number) {

    // implement the input data to function;
  }

  randomizeStudents(students) {

    var currentIndex : number = students.length
    var temporaryValue : Student;
    var randomIndex : number = 0;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = students[currentIndex];
      students[currentIndex] = students[randomIndex];
      students[randomIndex] = temporaryValue;
    }
    return students;
  }


  sortDescending(students) {
    var studentsSorted : Student[] = [];

    for (var i = 5; i > -1; i--) {
      students.forEach((student) => {
        //gotta change number to mathScore/readingScore/treehouseScore
        if (student.number === i) {
          studentsSorted.push(student);
        };
      });
    };
    return studentsSorted;
  }


  snakeStudents(students) {
    var studentsSnaked : Student[] = [];
    var tempArray : Student[] = [];

    for (var j = 0; students.length >= this.numberOfGroups; j++) {
      for (var l = 0; l < this.numberOfGroups; l++) {
        if (students[0]) {
          studentsSnaked.push(students[0]);
        };
        if (students[this.numberOfGroups]) {
          tempArray.push(students[this.numberOfGroups]);
        };
        students.shift();
      };
      if (tempArray[0]) {
        tempArray.reverse();
        tempArray.forEach((element) => {
          studentsSnaked.push(element)
        });
        if (students[this.numberOfGroups-1]) {
          students.splice(0, this.numberOfGroups);
        };
        tempArray = [];
      };
    };
    return studentsSnaked;
  }


  makeGroupsHetero(students) {
    var groups : Group[] = [];

    for (var n = 0; n < this.numberOfGroups; n++) {
      groups.push(new Group("group".concat((n+1).toString()), []));
    };

    for (var m = 0; m < Math.ceil(this.numberOfStudents/this.numberOfGroups); m++) {
      for (var k = 0; k < this.numberOfGroups; k++) {
        if (students) {
          groups[k].students.push(students[k]);
        };
      };
      students.splice(0, this.numberOfGroups);
    };
    groups.forEach((group) => {
      console.log("GROUPS HETEROGENEOUS");
      console.log(group.name);
      console.log(group.students);
    });
    return groups;
  }

  makeGroupsHomogenous(students) {
    var groups : Group[] = [];
    for (var n = 0; n < this.numberOfGroups; n++) {
      groups.push(new Group("group".concat((n+1).toString()), []));
    };
    for (var o = 0; o < this.numberOfGroups; o++) {
      for(var p = 0; p < this.numberOfStudents/this.numberOfGroups; p++) {
        if (students[p]) {
          groups[o].students.push(students[p]);
        };
      };
      students.splice(0, this.numberOfStudents/this.numberOfGroups);
    };
    return groups;
  }

  makeGroupsHomogenouslyPlusStar(students) {
    var groups : Group[] = [];
    for (var n = 0; n < this.numberOfGroups; n++) {
      groups.push(new Group("group".concat((n+1).toString()), []));
    };
    for (var q = 0; q < this.numberOfGroups; q++) {
      groups[q].students.push(students[(this.numberOfGroups-1)-q])
    };
    students.splice(0, this.numberOfGroups);

    for (var r = 0; r < this.numberOfGroups; r++) {
      for(var s = 0; s < (this.numberOfStudents/this.numberOfGroups) - 1; s++) {
        if (students[s]) {
          groups[r].students.push(students[s]);
        };
      };
      students.splice(0, (this.numberOfStudents/this.numberOfGroups)-1);
    };
    groups.forEach((group) => {
      console.log("GROUPS STAR");
      console.log(group.name);
      console.log(group.students);
    });
    return groups;
  }


  groupHeterogeneously(students) {
    this.makeGroupsHetero(this.snakeStudents(this.sortDescending(this.randomizeStudents(students))));
  }

  groupHomogeneously(students) {
    this.makeGroupsHomogenous(this.sortDescending(this.randomizeStudents(students)));
  }

  groupHomogenouslyPlusStar(students) {
    this.makeGroupsHomogenouslyPlusStar(this.sortDescending(this.randomizeStudents(students)));
  }
}
