import { TestBed } from '@angular/core/testing';

import { NavBarTitleService } from './nav-bar-title.service';

describe('NavBarTitleService', () => {
  let service: NavBarTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
