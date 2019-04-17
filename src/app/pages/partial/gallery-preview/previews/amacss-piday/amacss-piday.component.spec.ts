import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmacssPidayComponent } from './amacss-piday.component';

describe('AmacssPidayComponent', () => {
  let component: AmacssPidayComponent;
  let fixture: ComponentFixture<AmacssPidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmacssPidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmacssPidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
