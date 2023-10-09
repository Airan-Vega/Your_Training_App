import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit, OnDestroy {
  private loginSubscription: Subscription;
  public loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController
  ) {}
  ngOnInit() {}

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }

  public async login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;

    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });

    await loading.present();
    this.loginSubscription = this.authService
      .login(email as string, password as string)
      .subscribe(
        async () => {
          await loading.dismiss();
        },
        async () => {
          await loading.dismiss();
        }
      );
  }
}
