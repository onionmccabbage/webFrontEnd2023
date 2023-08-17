import { TestBed } from '@angular/core/testing';

import { DeletemeService } from './deleteme.service';

describe('DeletemeService', () => {
  let service: DeletemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
