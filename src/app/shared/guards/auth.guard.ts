import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
      private router: Router,
      ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.checkLogin(state.url, route.data['permission']);
    }

    checkLogin(url: string, rolePermission: string = ''): Promise<boolean> | boolean {
      console.log('urrrll', url)
        const loginToken = localStorage.getItem('loginToken') ?? false;
        if (loginToken) {
          console.log('conditiontrue');
          const routeUrls = ['/auth/login','/auth/forgot-password','/auth/sign-in'];
            if (routeUrls.includes(url)) {
              this.router.navigate(['/dashboard']);
              return false;
            }
            return true;
        }  else {
          if (url === '/auth/login') {
            return true;
          }
        }
        this.router.navigate(['/auth/login']);
        return false;
    }

}
