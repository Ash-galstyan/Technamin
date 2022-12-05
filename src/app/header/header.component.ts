import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Shopping App'

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        this.loginService.isLoggedIn = true;
      }
  }

}
