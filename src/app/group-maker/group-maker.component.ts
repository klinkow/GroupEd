import { Component, Input } from '@angular/core';
import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-group-maker',
  templateUrl: './group-maker.component.html',
  styleUrls: ['./group-maker.component.css'],
  providers: [UserService]
})



export class GroupMakerComponent {
  @Input() currentUser;
  @Input() classes;
  students: Student[] = [];
  public uid: string;

  constructor(private af: AngularFire, private userService: UserService) {
    // this.af.database.list('/students', { preserveSnapshot: true})
    //     .subscribe(snapshots=>{
    //         snapshots.forEach(snapshot => {
    //           this.students.push(snapshot.val());
    //         });
    //     })



    this.af.auth.subscribe(user => {
      this.uid = user.uid;
    })

    this.userService.getUser(this.uid).subscribe(lastData => {
      this.currentUser = lastData;
      console.log(this.currentUser);
    });

    this.af.database.list('/users/' + this.uid + '/classes').subscribe(lastData => {
      this.classes = lastData;
      console.log(this.classes)
    })
      // console.log("Casdfadsf:");
      // console.log(this.classes[0].students);
      // var dataIn = this.classes[0].students;
      // this.getStudentsFromUser(dataIn);

  }

  ngOnInit() {
  }

  // getStudentsFromUser(thing) {
  //   console.log(thing);
  //   var pludents = [];
  //   thing.forEach((student) => {
  //     pludents.push(student);
  //     console.log(pludents);
  //   });
  //   debugger;
  //   console.log(pludents);
  //   };


  numberOfGroups : number;
  numberOfStudents : number = this.students.length;
  scoreType: string;

  submitHeterogeneously(scoreType, numberOfGroups) {
    console.log(this.students, scoreType, parseInt(numberOfGroups));
    this.groupHeterogeneously(this.students, scoreType, parseInt(numberOfGroups));
  }

  submitHomogeneously(scoreType, numberOfGroups) {
    console.log(this.students, scoreType, parseInt(numberOfGroups));
    this.groupHomogeneously(this.students, scoreType, parseInt(numberOfGroups));
    // implement the input data to function;
  }
  submitHomogenouslyPlusStar(scoreType, numberOfGroups) {
    console.log(this.students, scoreType, parseInt(numberOfGroups));
    this.groupHomogeneouslyPlusStar(this.students, scoreType, parseInt(numberOfGroups));
    // implement the input data to function;
  }



  sortDescending(students, scoreType, numberOfGroups) {

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

    var studentsSorted : Student[] = [];

    for (var i = 5; i > -1; i--) {
      students.forEach((student) => {
        if (student.scoreType === i) {
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
      console.log(group.students);
    });
    return groups;
  }

  makeToScale(students, scoreToScale) {

    var breakPoint : number = (students.length)/5;

    var section4 = [];
    var section3 = [];
    var section2 = [];
    var section1 = [];
    var section0 = [];

    for (var i = 0; i < breakPoint; i++) {
      section4.push(students[i]);
      section3.push(students[i+breakPoint]);
      section2.push(students[i+2*breakPoint]);
      section1.push(students[i+3*breakPoint]);
      section0.push(students[i+4*breakPoint]);
    };


    for (var j = 0; j < 5; j++) {
      section4[j].scoreToScale = 4;
    };
    for (var l = 0; l < 5; l++) {
      section3[l].scoreToScale = 3;
    };
    for (var l = 0; l < 5; l++) {
      section2[l].scoreToScale = 2;
    };
    for (var l = 0; l < 5; l++) {
      section1[l].scoreToScale = 1;
    };
    for (var l = 0; l < 5; l++) {
      section0[l].scoreToScale = 0;
    };

    var studentsToScale = [];

    for (var k = 0; k < breakPoint; k++) {
      studentsToScale.push(section4[k]);
    };
    for (var k = 0; k < breakPoint; k++) {
      studentsToScale.push(section3[k]);
    };
    for (var k = 0; k < breakPoint; k++) {
      studentsToScale.push(section2[k]);
    };
    for (var k = 0; k < breakPoint; k++) {
      studentsToScale.push(section1[k]);
    };
    for (var k = 0; k < breakPoint; k++) {
      studentsToScale.push(section0[k]);
    };

    return studentsToScale;
  }


  groupHeterogeneously(students, scoreType, numberOfGroups) {
    this.makeGroupsHetero(this.snakeStudents(this.sortDescending(students, scoreType, numberOfGroups)));
  }

  groupHomogeneously(students, scoreType, numberOfGroups) {
    this.makeGroupsHomogenous(this.sortDescending(students, scoreType, numberOfGroups));
  }

  groupHomogeneouslyPlusStar(students, scoreType, numberOfGroups) {
    this.makeGroupsHomogenouslyPlusStar(this.sortDescending(students, scoreType, numberOfGroups));
  }

  // groupHeterogeneouslyWeirdScale(students, scoreToScale) {
  //   this.makeGroupsHetero(this.snakeStudents(this.makeToScale(this.sortDescending(students), scoreToScale)));
  // }
  //
  // groupHomogeneouslyWeirdScale(students, scoreToScale) {
  //   this.makeGroupsHomogenous(this.makeToScale(this.sortDescending(students), scoreToScale));
  // }
  //
  // groupHomogenouslyWeirdScalePlusStar(students, scoreToScale) {
  //   this.makeGroupsHomogenouslyPlusStar(this.makeToScale(this.sortDescending(students), scoreToScale));
  // }
}
