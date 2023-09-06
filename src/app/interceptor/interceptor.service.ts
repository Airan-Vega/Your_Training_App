import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, throwError, from } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private storage: Storage,
    private messageService: MessageService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.storage.get('token')).pipe(
      switchMap((token) => {
        if (token) {
          req = req.clone({
            headers: req.headers.set('x-token', token),
          });
        }

        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => throwError(error)),
          tap(
            () => {},
            (error: HttpErrorResponse) => this.handleError(error)
          )
        );
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error?.error?.msg) {
      this.messageService.errorToast({
        message: error?.error?.msg,
        duration: 1500,
        position: 'bottom',
      });
    } else {
      this.messageService.errorToast({
        message:
          'Se ha producido un error desconocido. Contacte con el administrador de la APP',
        duration: 1500,
        position: 'bottom',
      });
    }
  }
}
