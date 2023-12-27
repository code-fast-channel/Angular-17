import { Routes } from '@angular/router';
import { LayoutComponent } from './references/layouts/layout/layout.component';
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
            {
                path: 'payments',
                canActivate: [AuthGuard],
                loadChildren:() => import('./references/payments/payment.routes').then(routes => routes.paymentRoutes)
            },
        ]
    },
    {
        path: 'auth',
        canActivate: [AuthGuard],
        loadChildren:() => import('./references/auth/auth.routes').then(routes => routes.authRoutes)
    }
];




// import { Routes } from '@angular/router';
// import { LayoutComponent } from './references/layouts/layout/layout.component';
// import { AuthGuard } from './shared/guards/auth.guard';
// import {
//   permissionsConfig,
//   permissions,
// } from './shared/guards/auth.permissions.constant';
// export const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: routeDefaultRedirect(),
//         pathMatch: 'full',
//       },
//       {
//         path: 'dashboard',
//         canActivate: [AuthGuard],
//         data: {
//           breadcrumb: [
//             { name: 'Dashboard', url: '/' },
//             { name: 'View', url: '/' },
//           ],
//           title: 'DashBoard View',
//           permission: 'dashboard-page',
//         },
//         loadChildren: () =>
//           import('./references/dashboard/dahboard.routes').then(
//             (routes) => routes.dashBoardRoutes
//           ),
//       },
//       {
//         path: 'payments',
//         canActivate: [AuthGuard],
//         loadChildren: () =>
//           import('./references/payments/payment.routes').then(
//             (routes) => routes.paymentRoutes
//           ),
//       },
//     ],
//   },
//   {
//     path: 'auth',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./references/auth/auth.routes').then(
//         (routes) => routes.authRoutes
//       ),
//   },
// ];

// export function routeDefaultRedirect(routeVal: any = 'dashboard') {
//   const routeMatches: any = [
//     {
//       permission: 'dashboard-page',
//       isRouteAccess:
//         permissions.hasOwnProperty('dashboard-page') &&
//         permissions['dashboard-page'],
//       routePath: 'dashboard',
//     },
//     {
//       permission: 'payments-page',
//       isRouteAccess:
//         permissions.hasOwnProperty('payments-page') &&
//         permissions['payments-page'],
//       routePath: 'payments',
//     },
//   ];

//   const routeRedirect: any = routeMatches.findIndex(
//     (val: any) => val.isRouteAccess
//   );
//   return routeMatches[routeRedirect].routePath;
// }
