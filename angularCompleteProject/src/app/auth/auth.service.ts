import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { authData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User = null;
  authChange = new Subject<boolean>();

  registerUser(authData: authData) {
    this.user = {
      email: authData.email,
      userId: `${Math.round(Math.random() * 10000)}`,
    };
    this.authChange.next(true);
  }

  login(authData: authData) {
    this.user = {
      email: authData.email,
      userId: `${Math.round(Math.random() * 10000)}`,
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }
}
