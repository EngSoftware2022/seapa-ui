import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSolicitationComponent } from './friends-solicitation.component';

describe('FriendsSolicitationComponent', () => {
  let component: FriendsSolicitationComponent;
  let fixture: ComponentFixture<FriendsSolicitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsSolicitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
