import { TestBed } from '@angular/core/testing';

import { CyberTtpServiceService } from './cyber-ttp-service.service';

describe('CyberTtpServiceService', () => {
  let service: CyberTtpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyberTtpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
