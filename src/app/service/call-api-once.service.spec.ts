import { TestBed } from '@angular/core/testing';

import { CallApiOnceService } from './call-api-once.service';

describe('CallApiOnceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallApiOnceService = TestBed.get(CallApiOnceService);
    expect(service).toBeTruthy();
  });
});
