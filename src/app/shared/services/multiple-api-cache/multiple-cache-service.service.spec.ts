import { TestBed } from '@angular/core/testing';

import { MultipleCacheServiceService } from './multiple-cache-service.service';

describe('MultipleCacheServiceService', () => {
  let service: MultipleCacheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleCacheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
