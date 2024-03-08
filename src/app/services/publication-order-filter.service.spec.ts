import { TestBed } from '@angular/core/testing';

import { PublicationOrderFilterService } from './publication-order-filter.service';

describe('PublicationOrderFilterService', () => {
  let service: PublicationOrderFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationOrderFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
