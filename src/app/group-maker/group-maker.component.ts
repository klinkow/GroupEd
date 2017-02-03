import { Component, Input } from '@angular/core';
import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthguardService } from '.././authguard.service';
import { Observable } from 'rxjs/Rx';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-group-maker',
  templateUrl: './group-maker.component.html',
  styleUrls: ['./group-maker.component.css'],
  providers: [UserService]
})

export class GroupMakerComponent {
  @Input() selectedClass;
  students : Student[];
  numberOfGroups: number;
  numberOfStudents : number;
  uid: string;

  constructor(private af: AngularFire, private as: AuthguardService, private userService: UserService) {
    this.af.auth.subscribe(user => {
      this.uid = user.uid;
    })
  }

  ngOnInit() {
    this.numberOfStudents = this.selectedClass.students.length;
    this.students = this.selectedClass.students
    console.log(this.numberOfStudents)
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

    var studentsSorted = [];

    for (var i = 5; i > -1; i--) {
      students.forEach((student) => {
        if (parseInt(student[scoreType]) === i) {
          studentsSorted.push(student);
        };
      });
    };
    this.numberOfGroups = numberOfGroups;
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

    groups.forEach((group) => {
      console.log("GROUPS HOMOGENOUS");
      console.log(group.students);
    });

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


  groupHeterogeneously(scoreType, numberOfGroups) {
    var groups = this.makeGroupsHetero(this.snakeStudents(this.sortDescending(this.students, scoreType, numberOfGroups)));

    groups.forEach((group) => {
      this.af.database.list('/users/' + this.uid + '/classes/' + this.selectedClass.$key + '/groups').push({}).then((mystery) => {
        console.log(mystery);
        console.log(mystery.key());
      group.students.forEach((student) => {
        this.af.database.list('/users/' + this.uid + '/classes/' + this.selectedClass.$key + '/groups/' + mystery.key).push(student);
      })
    });
      // push({}).subscribe((lastData) => {
      //   group.students.forEach((student) => {lastData.push(student)})
      // })
    })
  }

  groupHomogeneously(scoreType, numberOfGroups) {
    this.makeGroupsHomogenous(this.sortDescending(this.students, scoreType, numberOfGroups));
  }

  groupHomogeneouslyPlusStar(scoreType, numberOfGroups) {
    this.makeGroupsHomogenouslyPlusStar(this.sortDescending(this.students, scoreType, numberOfGroups));
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
