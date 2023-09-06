import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth.interface';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit, OnDestroy {
  private loginSubscription$: Subscription = new Subscription();

  public loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private navController: NavController
  ) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.loginSubscription$.unsubscribe();
  }

  public login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.loginSubscription$ = this.authService
      .login(email as string, password as string)
      .subscribe((resp: Auth) => {
        const saveDatas = [
          {
            key: 'token',
            value: resp.user.token,
          },
          {
            key: 'role',
            value: resp.user.role,
          },
        ];
        this.localStorageService.saveData(saveDatas).then(() => {
          this.navController.navigateRoot('/user', { animated: true });
        });
      });
  }
}
