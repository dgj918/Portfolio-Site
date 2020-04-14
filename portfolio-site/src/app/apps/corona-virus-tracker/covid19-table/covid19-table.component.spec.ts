import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19TableComponent } from './covid19-table.component';

describe('Covid19TableComponent', () => {
  let component: Covid19TableComponent;
  let fixture: ComponentFixture<Covid19TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
