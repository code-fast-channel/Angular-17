﻿import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ToastrService } from '../toaster/toaster.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  protected userTokenDetail: any = {};

  constructor(private router: Router, private toastr: ToastrService) {
    console.log('interceptor');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.userTokenDetail = localStorage.getItem('loginToken') ? localStorage.getItem('loginToken') : false;
    if (this.userTokenDetail) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userTokenDetail}`
        }
      });
    }
    return next.handle(req).pipe(
      map((responsedata: any) => {
        if (responsedata instanceof HttpResponse) {
          const response = responsedata.body;
          if (response && response.message !== '' && req.method !== 'GET' && response.message !== 'Logged In successfully.' && response.message !== 'Successfully updated action flag'  ) {
            this.showNotificationSuccess('Success', response.message);
          }
        }
        return responsedata;
      }),
      catchError(response => {
        switch (response.status) {
          case 400:
            this.handleBadRequest(response.error);
            break;
          case 422:
            this.handleBadRequest(response.error);
            break;
          case 401:
            this.handleUnauthorized(response);
            break;
          case 502:
            this.handleServerError502();
            break;
          case 403:
            this.handleForbidden();
            break;

          case 404:
            this.handleNotFound(response);
            break;

          case 500:
            this.handleServerError();
            break;
          case 409:
            this.handleErrorMessages(response.error.meta);
            break;
          case 503:
            this.ServerUnavilableError();
            break;
          case 0:
            this.handleServerError502();
            break;
          default:
            break;
        }
        return throwError(response);
      })
    );
  }

  public handleServerError502() {
    this.router.navigate(['server-error']);
  }
  public handleDoc(response: any) {}
  /**
   * Shows notification errors when server response status is 401
   *
   * @ param error
   */
  private handleBadRequest(responseBody: any): void {
    console.log('Invalid', responseBody);
    this.showNotificationError('', responseBody.message);
  }
  private ServerUnavilableError(): void {
    const message = 'Service Unavailable',
        title = '500';
    this.showNotificationError('', message);
  }
  /**
   * Shows notification errors when server response status is 401 and redirects user to login page
   *
   * @ param responseBody
   */
  private handleUnauthorized(responseBody: any): void {
    // console.log('unauthorize response', responseBody);
    // this.showNotificationError('', responseBody.error.message);
    this.showNotificationError('', 'unauthorized');
    localStorage.removeItem('instituteToken');
    localStorage.removeItem('instituteDetails');
    localStorage.removeItem('superAdmin');
    // localStorage.removeItem('roleSlug');
    localStorage.removeItem('userMenu');
    this.router.navigate(['/auth']);
    // localStorage.clear();
  }

  /**
   * Shows notification errors when server response status is 403
   */
  private handleForbidden(): void {
    // this.toastr.error('ServerError403', 'Error');
    this.router.navigate(['/auth']);
  }

  /**
   * Shows notification errors when server response status is 404
   *
   * @ param responseBody
   */
  private handleNotFound(responseBody: any): void {
    const message = 'Page Not Found',
      title = '404';

    this.showNotificationError(title, message);
  }

  /**
   * Shows notification errors when server response status is 500
   */
  private handleServerError(): void {
    const message = 'Internal Server Error',
      title = '500';

    this.showNotificationError(title, message);
  }

  /**
   * Parses server response and shows notification errors with translated messages
   *
   * @ param response
   */
  private handleErrorMessages(response: any): void {
    if (!response) {
      return;
    }
    this.showNotificationError('Error', response.message);
  }

  /**
   * Returns relative url from the absolute path
   *
   * @ param responseBody
   * @ returns {string}
   */
  private getRelativeUrl(url: string): string {
    return url.toLowerCase().replace(/^(?:\/\/|[^\/]+)*\//, '');
  }

  /**
   * Shows error notification with given title and message
   *
   * @ param title
   * @ param message
   */
  private showNotificationError(title: string, message: string): void {
    console.log('message', message);
    console.log('title', title);

    // this.toastr.error(message);
  }

  /**
   * Shows success notification with given title and message
   *
   * @ param title
   * @ param message
   */
  private showNotificationSuccess(title: string, message: string): void {
    if (message === 'You successfully changed the notification read status') {
      return;
    }
    // this.toastr.success(message, title);
  }
}
