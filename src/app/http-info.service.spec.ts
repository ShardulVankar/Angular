import { TestBed } from '@angular/core/testing';

import { HttpInfoService } from './http-info.service';

describe('HttpInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInfoService = TestBed.get(HttpInfoService);
    expect(service).toBeTruthy();
  });
});
