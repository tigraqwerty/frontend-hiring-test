import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      mergeMap((response: any) => {
        if (response.body && response.body.errors) {
          if (
            response.body.errors.length > 0 &&
            response.body.errors[0].message === 'Unauthorized'
          ) {
            this.Error401Handler();
            return throwError({
              error: { status: 401, message: 'Unauthorized' },
            });
          }
        }

        return of(response);
      }),
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 401: {
              this.Error401Handler();
              break;
            }
            default: {
              console.error(error);
              break;
            }
          }
        }
        const notification = error.error.message || error.statusText;
        return throwError(notification);
      })
    );
  }

  Error401Handler() {
    this._auth.logOut();
    this._router.navigate(['/login']);
    this._notificationService.showSnackMessage('The session is closed');
    this._notificationService.clearLoading();
  }
}
