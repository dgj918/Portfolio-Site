import { TestBed } from '@angular/core/testing';

import { CasesJhuService } from './cases-jhu.service';

describe('CasesJhuService', () => {
  let service: CasesJhuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasesJhuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
