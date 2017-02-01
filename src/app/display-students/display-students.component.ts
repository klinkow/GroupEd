import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students = [
    "Harry", "Ron", "Hermione", "Malfoy"
  ]

}
