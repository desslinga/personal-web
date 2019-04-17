import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmacssCoffeehouseComponent } from './amacss-coffeehouse.component';

describe('AmacssCoffeehouseComponent', () => {
  let component: AmacssCoffeehouseComponent;
  let fixture: ComponentFixture<AmacssCoffeehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmacssCoffeehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmacssCoffeehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
