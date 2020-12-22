import { TestBed } from '@angular/core/testing';

import { TariffModifierEffectsService } from './tariff-modifier-effects.service';

describe('TariffModifierEffectsService', () => {
  let service: TariffModifierEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffModifierEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
