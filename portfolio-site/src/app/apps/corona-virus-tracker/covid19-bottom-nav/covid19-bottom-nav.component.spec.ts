import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19BottomNavComponent } from './covid19-bottom-nav.component';

describe('Covid19BottomNavComponent', () => {
  let component: Covid19BottomNavComponent;
  let fixture: ComponentFixture<Covid19BottomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19BottomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19BottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
