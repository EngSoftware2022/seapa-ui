/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewModerateBetComponent } from './new-moderate-bet.component';

describe('NewModerateBetComponent', () => {
  let component: NewModerateBetComponent;
  let fixture: ComponentFixture<NewModerateBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModerateBetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModerateBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
