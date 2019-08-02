import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCreateComponent } from './info-create.component';

describe('InfoCreateComponent', () => {
  let component: InfoCreateComponent;
  let fixture: ComponentFixture<InfoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
