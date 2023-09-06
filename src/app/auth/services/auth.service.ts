import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.interface';
import { LocalStorageService } from '../../shared/services/local-storage.service';

const apiUrl: string = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  public login(email: string, password: string): Observable<Auth> {
    const data = { email, password };
    return this.httpClient.post<Auth>(`${apiUrl}/auth/login`, data).pipe(
      catchError((error: any) => {
        this.localStorageService.clearAllData();
        return throwError(() => error);
      })
    );
  }

  public renewToken(): Observable<boolean> {
    return this.httpClient.get<Auth>(`${apiUrl}/auth/renew`).pipe(
      tap((resp: Auth) => {
        const datas = [{ key: 'token', value: resp.user.token }];
        this.localStorageService.saveData(datas);
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  public logout() {
    this.localStorageService.clearAllData();
  }
}
