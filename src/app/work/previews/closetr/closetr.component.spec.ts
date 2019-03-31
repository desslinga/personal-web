import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetrComponent } from './closetr.component';

describe('ClosetrComponent', () => {
  let component: ClosetrComponent;
  let fixture: ComponentFixture<ClosetrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
