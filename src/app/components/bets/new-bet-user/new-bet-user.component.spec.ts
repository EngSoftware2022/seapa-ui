import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBetUserComponent } from './new-bet-user.component';

describe('NewBetUserComponent', () => {
  let component: NewBetUserComponent;
  let fixture: ComponentFixture<NewBetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBetUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
