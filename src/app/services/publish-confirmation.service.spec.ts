import { TestBed } from '@angular/core/testing';

import { PublishConfirmationService } from './publish-confirmation.service';

describe('PublishConfirmationService', () => {
  let service: PublishConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
