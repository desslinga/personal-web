import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparknodesComponent } from './sparknodes.component';

describe('SparknodesComponent', () => {
  let component: SparknodesComponent;
  let fixture: ComponentFixture<SparknodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparknodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparknodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
