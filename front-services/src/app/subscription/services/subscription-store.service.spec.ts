import { TestBed } from '@angular/core/testing';

import { SubscriptionStoreService } from './subscription-store.service';

describe('SubscriptionStoreService', () => {
  let service: SubscriptionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
