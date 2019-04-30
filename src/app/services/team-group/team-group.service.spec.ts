import { TestBed, inject } from '@angular/core/testing';

import { TeamGroupService } from './team-group.service';

describe('TeamGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamGroupService]
    });
  });

  it('should be created', inject([TeamGroupService], (service: TeamGroupService) => {
    expect(service).toBeTruthy();
  }));
});
