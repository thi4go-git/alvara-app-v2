import { TestBed } from '@angular/core/testing';

import { CanMatchGuard } from './can-match.guard';

describe('CanMatchGuard', () => {
  let guard: CanMatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanMatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
