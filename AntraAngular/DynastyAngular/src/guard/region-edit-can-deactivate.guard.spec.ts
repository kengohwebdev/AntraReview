import { TestBed } from '@angular/core/testing';

import { RegionEditCanDeactivateGuard } from './region-edit-can-deactivate.guard';

describe('RegionEditCanDeactivateGuard', () => {
  let guard: RegionEditCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegionEditCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
