import { Injectable } from '@angular/core';
import { generateFakeJWT } from '../utils/fakeJWT-Gen';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor() {}

  login(email: string, password: string) {
    if (email === 'admin@test.com' && password === '1234') {
      const fakeToken = generateFakeJWT(email);

      localStorage.setItem('token', fakeToken);

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  //obtener payload para cargar datos en dashboard
getPayload() {

  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem('token');

  if (!token) return null;

  const payload = token.split('.')[1];

  const decoded = atob(payload);

  return JSON.parse(decoded);
}
}
