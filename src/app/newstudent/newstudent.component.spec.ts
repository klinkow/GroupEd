/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewstudentComponent } from './newstudent.component';

describe('NewstudentComponent', () => {
  let component: NewstudentComponent;
  let fixture: ComponentFixture<NewstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
