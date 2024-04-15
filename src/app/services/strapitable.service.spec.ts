import { TestBed } from '@angular/core/testing';

import { StrapitableService } from './strapitable.service';

describe('StrapitableService', () => {
  let service: StrapitableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapitableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
