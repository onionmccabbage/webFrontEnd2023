import { TestBed } from '@angular/core/testing';

import { NonsenseService } from './nonsense.service';

describe('NonsenseService', () => {
  let service: NonsenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonsenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
