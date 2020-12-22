import { TestBed } from '@angular/core/testing';

import { TariffEffectsService } from './tariff-effects.service';

describe('TariffEffectsService', () => {
  let service: TariffEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
