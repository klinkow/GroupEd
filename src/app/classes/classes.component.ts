import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { Group } from '../group.model';
import { Class } from '../class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSeatingChart(clickedClass: Class) {
    //take me to seating chart
  }

}
