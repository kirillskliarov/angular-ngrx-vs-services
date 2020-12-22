import { TestBed } from '@angular/core/testing';

import { ApplicationStoreService } from './application-store.service';

describe('ApplicationStoreService', () => {
  let service: ApplicationStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
