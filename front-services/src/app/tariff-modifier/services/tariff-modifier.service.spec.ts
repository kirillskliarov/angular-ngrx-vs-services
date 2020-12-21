import { TestBed } from '@angular/core/testing';

import { TariffModifierService } from './tariff-modifier.service';

describe('TariffModifierService', () => {
  let service: TariffModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
