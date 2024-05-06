import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canEditImageGuard } from './can-edit-image.guard';

describe('canEditImageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canEditImageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
