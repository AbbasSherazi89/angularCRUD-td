import { TestBed } from '@angular/core/testing';

import { TreenodeService } from './treenode.service';

describe('TreenodeService', () => {
  let service: TreenodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreenodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
