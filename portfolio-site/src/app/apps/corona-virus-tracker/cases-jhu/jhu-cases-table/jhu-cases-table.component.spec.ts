import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhuCasesTableComponent } from './jhu-cases-table.component';

describe('JhuCasesTableComponent', () => {
  let component: JhuCasesTableComponent;
  let fixture: ComponentFixture<JhuCasesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhuCasesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhuCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
