import { TestBed } from '@angular/core/testing';

import { TariffModifierStoreService } from './tariff-modifier-store.service';

describe('TariffModifierStoreService', () => {
  let service: TariffModifierStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffModifierStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
