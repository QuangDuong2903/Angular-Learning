import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../authetication/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuth = inject(AuthenticationService).isAuthenticate();
  const router = inject(Router);
  
  if (route.url[0].path == 'sign-in' || route.url[0].path == 'sign-up') {
    if (!isAuth) {
      return true;
    } else {
      router.navigateByUrl('/');
      return false;
    }
  }
  if (isAuth) {
    return true;
  }
  router.navigateByUrl('/sign-in');
  return false;
};
