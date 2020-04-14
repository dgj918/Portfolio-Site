import { TestBed } from '@angular/core/testing';

import { ByDayStatsService } from './by-day-stats.service';

describe('ByDayStatsService', () => {
  let service: ByDayStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByDayStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
