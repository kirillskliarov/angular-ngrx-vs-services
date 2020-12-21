import { TestBed } from '@angular/core/testing';

import { TariffFacadeService } from './tariff-facade.service';

describe('TariffFacadeService', () => {
  let service: TariffFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
