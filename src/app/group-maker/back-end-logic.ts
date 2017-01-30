import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';


class Student {
  constructor(public name: string, public number: number) { }
};

class Group {
  constructor(public name: string, public students: Student[]) { }
};

var students: Student[] = [
  new Student("Alice", 4), new Student("Andrew", 4), new Student("Alyssa", 4),
  new Student("Aticus", 4), new Student("Bill", 3), new Student("Bonny", 3),
  new Student("Bethany", 3), new Student("Caitlin", 2), new Student("Coco", 2),
  new Student("Dana", 1), new Student("David", 1), new Student("Danielle", 1),
  new Student("Dillon", 1), new Student("Dina", 1), new Student("Evalyn", 0),
];


var numberOfGroups: number = 5;
var numberOfStudents : number = students.length;


function randomizeStudents(students) {

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


function sortDescending(students) {
  var studentsSorted : Student[] = [];

  for (var i = 5; i > -1; i--) {
    students.forEach((student) => {
      if (student.number === i) {
        studentsSorted.push(student);
      };
    });
  };
  return studentsSorted;
}


function snakeStudents(students) {
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


function makeGroupsHetero(students) {
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
    console.log("GROUPS HETERO");
    console.log(group.name);
    console.log(group.students);
  });


  return groups;

}

function makeGroupsHomogenous(students) {
  var groups : Group[] = [];
  for (var n = 0; n < numberOfGroups; n++) {
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
    console.log(group.name);
    console.log(group.students);
  });
  return groups;
}

function makeGroupsHomogenouslyPlusStar(students) {
  var groups : Group[] = [];
  for (var n = 0; n < numberOfGroups; n++) {
    groups.push(new Group("group".concat((n+1).toString()), []));
  };
  for (var q = 0 ; q < this.numberOfGroups; q++) {
    groups[q].students.push(students[q])
  };

  //what's going on??????
  for (var r = 0; r < this.numberOfGroups; r++) {
    for(var s = 0; s < (this.numberOfStudents/this.numberOfGroups) - 1; s++) {
      if (students[s]) {
        groups[r].students.push(students[s]);
      };
    };
  };
  groups.forEach((group) => {
    console.log("GROUPS STAR");
    console.log(group.name);
    console.log(group.students);
  });
  return groups;
}

function groupHeterogeneously(students) {

  makeGroupsHetero(snakeStudents(sortDescending(randomizeStudents(students))));


}

function groupHomogeneously(students) {

  makeGroupsHomogenous(sortDescending(randomizeStudents(students)));

}

function groupHomogenouslyPlusStar(students) {

  makeGroupsHomogenouslyPlusStar(sortDescending(randomizeStudents(students)));

}

console.log("HETEROGENOUS:");
console.log(groupHeterogeneously(students));

console.log("HOMOGENEOUS:");
console.log(groupHomogeneously(students));

console.log("STAR:");
console.log(groupHomogenouslyPlusStar(students));
