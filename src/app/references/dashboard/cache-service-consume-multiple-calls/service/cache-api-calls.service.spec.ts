import { TestBed } from '@angular/core/testing';

import { CacheApiCallsService } from './cache-api-calls.service';

describe('CacheApiCallsService', () => {
  let service: CacheApiCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheApiCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
