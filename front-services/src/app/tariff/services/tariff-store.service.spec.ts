import { TestBed } from '@angular/core/testing';

import { TariffStoreService } from './tariff-store.service';

describe('TariffStoreService', () => {
  let service: TariffStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
