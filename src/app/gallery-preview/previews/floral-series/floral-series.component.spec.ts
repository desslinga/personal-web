import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloralSeriesComponent } from './floral-series.component';

describe('FloralSeriesComponent', () => {
  let component: FloralSeriesComponent;
  let fixture: ComponentFixture<FloralSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloralSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloralSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
