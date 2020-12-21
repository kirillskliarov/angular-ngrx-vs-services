import { TestBed } from '@angular/core/testing';

import { SubscriptionFacadeService } from './subscription-facade.service';

describe('SubscriptionFacadeService', () => {
  let service: SubscriptionFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
