import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
