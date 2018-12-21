import { TestBed } from '@angular/core/testing';

import { ScreenChangeService } from './screen-change.service';

describe('ScreenChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenChangeService = TestBed.get(ScreenChangeService);
    expect(service).toBeTruthy();
  });
});
