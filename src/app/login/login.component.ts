import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  userData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  submit() {
    if (this.loginForm.valid) {
      this.userData = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      }
      this.loginService.login(this.userData);
      this.router.navigate(['home'])
    }
  }

}
