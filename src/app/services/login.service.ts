import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(userData: any) {
    localStorage.setItem('username', userData.username);
    localStorage.setItem('password', userData.password);
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isLoggedIn = false;

    this.router.navigate(['']);
  }
}
