import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/auth.interface';

const apiUrl: string = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _storage: Storage | null = null;
  public token: string | null = null;
  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  private async init() {
    this._storage = await this.storage.create();
  }

  public login(email: string, password: string): Promise<boolean> {
    const data = { email, password };
    return new Promise((resolve) => {
      this.http
        .post<Login>(`${apiUrl}/auth/login`, data)
        .pipe(
          catchError((error: any) => {
            this.token = null;
            this._storage?.clear();
            resolve(false);
            return throwError(() => error);
          })
        )
        .subscribe((resp: Login) => {
          this.guardarToke(resp.user.token);
          resolve(true);
        });
    });
  }

  private async guardarToke(token: string) {
    this.token = token;
    await this._storage?.set('token', token);
  }
}
