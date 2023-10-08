import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

import { environment } from 'src/environments/environment';
import { Role, User } from 'src/app/user/models';
import { Auth } from '../models/auth.interface';

const apiUrl: string = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _storage: Storage | null = null;
  public token: string | null = null;
  public role: Role;
  public authenticatedUser: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private navController: NavController
  ) {
    this.init();
  }

  private async init() {
    this._storage = await this.storage.create();
  }

  private async saveLocalStorage({
    token,
    role,
  }: {
    token: string;
    role: Role;
  }) {
    this.token = token;
    this.role = role;
    await this.storage.set('token', token);
    await this.storage.set('role', role);
  }
  private async getDataLocalStorage() {
    this.token = (await this.storage.get('token')) || null;
    this.role = (await this.storage.get('role')) || null;
  }

  public login(email: string, password: string): Promise<Auth | undefined> {
    const data = { email, password };

    return this.httpClient
      .post<Auth>(`${apiUrl}/auth/login`, data)
      .pipe(
        tap(async (resp: Auth) => {
          await this.saveLocalStorage({
            token: resp.user.token,
            role: resp.user.role,
          });
          this.navController.navigateRoot('/user/list-user');
        }),
        catchError((error: any) => {
          this.storage.clear();
          return throwError(() => error);
        })
      )
      .toPromise();
  }

  public async renewToken(): Promise<boolean> {
    await this.getDataLocalStorage();
    if (!this.token) {
      this.navController.navigateRoot('/auth/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      return this.httpClient
        .get<Auth>(`${apiUrl}/auth/renew`)
        .pipe(
          tap(async (resp: Auth) => {
            if (resp.ok) {
              await this.saveLocalStorage({
                token: resp.user.token,
                role: resp.user.role,
              });
              this.authenticatedUser = resp.user;
              resolve(true);
            } else {
              this.navController.navigateRoot('/auth/login');
              resolve(false);
            }
          })
        )
        .toPromise();
    });
  }

  public async isLogin(): Promise<boolean> {
    await this.getDataLocalStorage();
    if (this.token) {
      this.navController.navigateRoot('/user/list-user');
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);
    }
  }

  public logout() {
    this.token = null;
    this.authenticatedUser = null;
    this.storage.clear();
    this.navController.navigateRoot('/auth/login', { animated: true });
  }
}
