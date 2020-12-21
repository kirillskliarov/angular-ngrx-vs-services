import { TestBed } from '@angular/core/testing';

import { TariffModifierFacadeService } from './tariff-modifier-facade.service';

describe('TariffModifierFacadeService', () => {
  let service: TariffModifierFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffModifierFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
