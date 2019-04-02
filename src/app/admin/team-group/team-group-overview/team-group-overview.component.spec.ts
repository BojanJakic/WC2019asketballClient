import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGroupOverviewComponent } from './team-group-overview.component';

describe('TeamGroupOverviewComponent', () => {
  let component: TeamGroupOverviewComponent;
  let fixture: ComponentFixture<TeamGroupOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamGroupOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGroupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
