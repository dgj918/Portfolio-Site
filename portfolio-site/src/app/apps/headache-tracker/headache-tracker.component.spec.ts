import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadacheTrackerComponent } from './headache-tracker.component';

describe('HeadacheTrackerComponent', () => {
  let component: HeadacheTrackerComponent;
  let fixture: ComponentFixture<HeadacheTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadacheTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadacheTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
