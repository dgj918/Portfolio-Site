import { TestBed } from '@angular/core/testing';

import { HeadachesService } from './headaches.service';

describe('HeadachesService', () => {
  let service: HeadachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
