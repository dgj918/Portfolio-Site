import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhuCasesChartComponent } from './jhu-cases-chart.component';

describe('JhuCasesChartComponent', () => {
  let component: JhuCasesChartComponent;
  let fixture: ComponentFixture<JhuCasesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhuCasesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhuCasesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
