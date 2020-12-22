import { TestBed } from '@angular/core/testing';

import { SubscriptionEffectsService } from './subscription-effects.service';

describe('SubscriptionEffectsService', () => {
  let service: SubscriptionEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
