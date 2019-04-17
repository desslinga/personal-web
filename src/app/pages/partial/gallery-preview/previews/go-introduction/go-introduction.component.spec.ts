import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIntroductionComponent } from './go-introduction.component';

describe('GoIntroductionComponent', () => {
  let component: GoIntroductionComponent;
  let fixture: ComponentFixture<GoIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
