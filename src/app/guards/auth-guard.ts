// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // IMPORTANTE: permitir SSR
  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  // Ya en browser validamos
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  }

  router.navigate(['/login']);
  return false;

};