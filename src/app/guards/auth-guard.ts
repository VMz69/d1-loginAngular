// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  //verificando si estamos en el navegador para usar el localstorage dado que en SSR no se pueden usar estos objetos nativos del navegador
  if (isPlatformBrowser(platformId)) {

    const token = localStorage.getItem("token");

    if (token) {
      return true;
    }

  }

  router.navigate(['/login']);
  return false;

};