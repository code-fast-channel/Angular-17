import { Routes } from '@angular/router';
import { LayoutComponent } from './references/layouts/layout/layout.component';
// import { SidenavComponent } from './references//layouts//sidenav/sidenav.component';
import { AuthGuard } from './shared/guards/auth.guard';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: "full"
            },
            {
                path: 'dashboard',
                canActivate: [AuthGuard],
                loadChildren:() => import('./references/dashboard/dahboard.routes').then(routes => routes.dashBoardRoutes)
            },
        ]
    },
    {
        path: 'auth',
        canActivate: [AuthGuard],
        loadChildren:() => import('./references/auth/auth.routes').then(routes => routes.authRoutes)
    }
];
