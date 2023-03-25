import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { authData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User = null;
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  registerUser(authData: authData) {
    this.user = {
      email: authData.email,
      userId: `${Math.round(Math.random() * 10000)}`,
    };
    this.authSuccesfully();
  }

  login(authData: authData) {
    this.user = {
      email: authData.email,
      userId: `${Math.round(Math.random() * 10000)}`,
    };
    this.authSuccesfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccesfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
