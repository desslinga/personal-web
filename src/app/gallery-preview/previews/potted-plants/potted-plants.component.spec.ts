import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PottedPlantsComponent } from './potted-plants.component';

describe('PottedPlantsComponent', () => {
  let component: PottedPlantsComponent;
  let fixture: ComponentFixture<PottedPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PottedPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PottedPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
