import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmacssOtherComponent } from './amacss-other.component';

describe('AmacssOtherComponent', () => {
  let component: AmacssOtherComponent;
  let fixture: ComponentFixture<AmacssOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmacssOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmacssOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
