import { TestBed } from '@angular/core/testing';

import { CriptoService } from './cripto.service';

describe('CryptoService', () => {
  let service: CriptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
