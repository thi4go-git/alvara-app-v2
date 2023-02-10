import { TestBed } from '@angular/core/testing';

import { AlvaraService } from './alvara.service';

describe('AlvaraService', () => {
  let service: AlvaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlvaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
