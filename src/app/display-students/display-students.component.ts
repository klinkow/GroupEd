import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent implements OnInit {
  @Input() selectedClass;
  public classToGroup;
  public displayGroupMaker: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showGroupMaker() {
    this.displayGroupMaker = true;
  }
}
