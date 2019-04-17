import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPreviewComponent } from './work-preview.component';

describe('WorkPreviewComponent', () => {
  let component: WorkPreviewComponent;
  let fixture: ComponentFixture<WorkPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
