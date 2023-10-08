import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  public loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  ngOnInit() {}

  public async login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    await this.authService.login(email as string, password as string);
  }
}
