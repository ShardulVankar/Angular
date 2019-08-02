import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalInfoViewComponent } from './interval-info-view.component';

describe('IntervalInfoViewComponent', () => {
  let component: IntervalInfoViewComponent;
  let fixture: ComponentFixture<IntervalInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
