import { Injectable } from '@angular/core';
import { generateFakeJWT } from '../utils/fakeJWT-Gen';

@Injectable({
  providedIn: 'root'
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

}