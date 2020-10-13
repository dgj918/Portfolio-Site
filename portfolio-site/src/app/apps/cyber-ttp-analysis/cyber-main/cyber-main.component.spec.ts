import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberMainComponent } from './cyber-main.component';

describe('CyberMainComponent', () => {
  let component: CyberMainComponent;
  let fixture: ComponentFixture<CyberMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
