import { TestBed } from '@angular/core/testing';

import { CaseChangeByDayService } from './case-change-by-day.service';

describe('CaseChangeByDayService', () => {
  let service: CaseChangeByDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseChangeByDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
