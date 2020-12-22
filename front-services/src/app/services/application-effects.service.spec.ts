import { TestBed } from '@angular/core/testing';

import { ApplicationEffectsService } from './application-effects.service';

describe('ApplicationEffectsService', () => {
  let service: ApplicationEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
