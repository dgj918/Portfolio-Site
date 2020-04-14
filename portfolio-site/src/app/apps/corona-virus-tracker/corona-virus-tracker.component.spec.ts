import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaVirusTrackerComponent } from './corona-virus-tracker.component';

describe('CoronaVirusTrackerComponent', () => {
  let component: CoronaVirusTrackerComponent;
  let fixture: ComponentFixture<CoronaVirusTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaVirusTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaVirusTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
