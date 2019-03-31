import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WafflyComponent } from './waffly.component';

describe('WafflyComponent', () => {
  let component: WafflyComponent;
  let fixture: ComponentFixture<WafflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WafflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WafflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
