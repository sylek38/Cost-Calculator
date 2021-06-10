import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumViewComponent } from './sum-view.component';

describe('SumViewComponent', () => {
  let component: SumViewComponent;
  let fixture: ComponentFixture<SumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
