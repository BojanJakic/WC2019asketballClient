import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamGroupComponent } from './new-team-group.component';

describe('NewTeamGroupComponent', () => {
  let component: NewTeamGroupComponent;
  let fixture: ComponentFixture<NewTeamGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeamGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
