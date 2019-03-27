import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UofthacksVComponent } from './uofthacks-v.component';

describe('UofthacksVComponent', () => {
  let component: UofthacksVComponent;
  let fixture: ComponentFixture<UofthacksVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UofthacksVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UofthacksVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
