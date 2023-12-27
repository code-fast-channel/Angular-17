// import { Routes } from '@angular/router';
// import { AuthGuard } from '../../shared/guards/auth.guard';

// export const dashBoardRoutes: Routes = [
//     {
//         path: '',
//         loadComponent:() => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
//         canActivate: [AuthGuard],
//         data: {
//             breadcrumb: [{ name: 'Dashboard', url: '/' }],
//             title: 'DashBoard'
//         }
//     },
//     {
//         path: 'view',
//         loadComponent:() => import('./dashboard-view/dashboard-view.component').then(m=>m.DashboardViewComponent),
//         canActivate: [AuthGuard],
//         data: {
//             breadcrumb: [{ name: 'Dashboard', url: '/' },{name: 'View', url: '/'}],
//             title: 'DashBoard View',
//             permission: 'dashboard-view'
//         }
//     },
//     {
//         path: 'table',
//         loadComponent:() => import('./reference-consume/reusable-table/reusable-table.component').then(m=>m.ReusableTableComponent),
//         canActivate: [AuthGuard],
//         data: {
//             breadcrumb: [{ name: 'Dashboard', url: '/' },{name: 'View', url: '/'}],
//             title: 'DashBoard View',
//             permission: 'dashboard-table'
//         }
//     },
//     {
//         path: 'pagination',
//         loadComponent:() => import('./reference-consume/reusable-pagination/mat-pagination-consume/mat-pagination-consume.component').then(m=>m.MatPaginationConsumeComponent),
//         canActivate: [AuthGuard],
//     }
// ];


import { Routes } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';

const getDashboardPath = () => {
  const isAdmin = true;
  const val = {
      '':'dashboard-view'
  }
  return isAdmin ? 'pagination' : 'dashboard/user';
};

export const dashBoardRoutes: Routes = [
  {
    path: '',
    redirectTo: getDashboardPath(),
    pathMatch: 'full'
  },
  {
    path: 'dashboard/admin',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: [{ name: 'Dashboard', url: '/' }],
      title: 'DashBoard'
    }
  },
  {
    path: 'dashboard/user',
    loadComponent: () => import('./dashboard-view/dashboard-view.component').then(m => m.DashboardViewComponent),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: [{ name: 'Dashboard', url: '/' }, { name: 'View', url: '/' }],
      title: 'DashBoard View'
    }
  },
  {
    path: 'table',
    loadComponent: () => import('./reference-consume/reusable-table/reusable-table.component').then(m => m.ReusableTableComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'pagination',
    loadComponent: () => import('./reference-consume/reusable-pagination/mat-pagination-consume/mat-pagination-consume.component').then(m => m.MatPaginationConsumeComponent),
    canActivate: [AuthGuard],
  }
];
