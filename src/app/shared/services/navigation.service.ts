import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';

import { App } from '@capacitor/app';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private destroy$ = new Subject<void>();
  constructor(
    private router: Router,
    private navController: NavController,
    private platform: Platform,
    private alertController: AlertController,
    private authService: AuthService
  ) {}
  private async alertCloseApp() {
    const alert = await this.alertController.create({
      message: 'Seguro que quieres cerrar la app',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Cerrar App',
          role: 'confirm',
          handler: () => {
            App.exitApp();
          },
        },
      ],
    });
    await alert.present();
  }

  public closeApp() {
    const roleUrls = {
      administrator: '/user/list-user',
      monitor: '/user/list-user',
      user: '/training/list-training',
    };
    this.platform.backButton
      .pipe(takeUntil(this.destroy$))
      .subscribe(async () => {
        const shouldCloseApp = Object.keys(roleUrls).some((role) => {
          return (
            this.authService.role === role && this.router.url === roleUrls[role]
          );
        });
        if (this.router.url === '/auth/login' || shouldCloseApp) {
          await this.alertCloseApp();
        } else {
          this.navController.back();
        }
      });
  }

  public destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
