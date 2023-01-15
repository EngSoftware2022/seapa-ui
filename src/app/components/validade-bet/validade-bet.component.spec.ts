import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadeBetComponent } from './validade-bet.component';

describe('ValidadeBetComponent', () => {
  let component: ValidadeBetComponent;
  let fixture: ComponentFixture<ValidadeBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidadeBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidadeBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
