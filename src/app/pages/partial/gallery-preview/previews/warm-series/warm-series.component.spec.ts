import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmSeriesComponent } from './warm-series.component';

describe('WarmSeriesComponent', () => {
  let component: WarmSeriesComponent;
  let fixture: ComponentFixture<WarmSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
