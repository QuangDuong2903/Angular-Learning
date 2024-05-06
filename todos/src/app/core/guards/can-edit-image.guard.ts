import { CanActivateFn } from '@angular/router';

export const canEditImageGuard: CanActivateFn = (route, state) => {
  return true;
};
