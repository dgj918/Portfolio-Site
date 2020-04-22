import { TestBed } from '@angular/core/testing';

import { StatesCountiesJhuService } from './states-counties-jhu.service';

describe('StatesCountiesJhuService', () => {
  let service: StatesCountiesJhuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesCountiesJhuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
