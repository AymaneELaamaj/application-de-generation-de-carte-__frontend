import { TestBed } from '@angular/core/testing';

import { RedalService } from './redal.service';

describe('RedalService', () => {
  let service: RedalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
