import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityByDateChartComponent } from './intensity-by-date-chart.component';

describe('IntensityByDateChartComponent', () => {
  let component: IntensityByDateChartComponent;
  let fixture: ComponentFixture<IntensityByDateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensityByDateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensityByDateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
