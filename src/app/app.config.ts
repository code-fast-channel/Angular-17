import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  
    },]
};
