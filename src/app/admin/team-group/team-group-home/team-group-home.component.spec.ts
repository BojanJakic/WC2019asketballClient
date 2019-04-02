import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGroupHomeComponent } from './team-group-home.component';

describe('TeamGroupHomeComponent', () => {
  let component: TeamGroupHomeComponent;
  let fixture: ComponentFixture<TeamGroupHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamGroupHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGroupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
