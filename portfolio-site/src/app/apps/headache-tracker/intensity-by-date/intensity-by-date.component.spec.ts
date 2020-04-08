import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityByDateComponent } from './intensity-by-date.component';

describe('IntensityByDateComponent', () => {
  let component: IntensityByDateComponent;
  let fixture: ComponentFixture<IntensityByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensityByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensityByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
