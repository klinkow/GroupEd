/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewclassComponent } from './newclass.component';

describe('NewclassComponent', () => {
  let component: NewclassComponent;
  let fixture: ComponentFixture<NewclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
