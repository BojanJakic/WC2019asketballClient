import { TestBed, inject } from '@angular/core/testing';

import { RealTeamService } from './real-team.service';

describe('RealTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealTeamService]
    });
  });

  it('should be created', inject([RealTeamService], (service: RealTeamService) => {
    expect(service).toBeTruthy();
  }));
});
