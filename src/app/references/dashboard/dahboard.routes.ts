import { Routes } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';

export const dashBoardRoutes: Routes = [
    {
        path: '',
        loadComponent:() => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
        canActivate: [AuthGuard],
        data: {
            breadcrumb: [{ name: 'Dashboard', url: '/' }],
            title: 'DashBoard'
        }
    },
    {
        path: 'view',
        loadComponent:() => import('./dashboard-view/dashboard-view.component').then(m=>m.DashboardViewComponent),
        canActivate: [AuthGuard],
        data: {
            breadcrumb: [{ name: 'Dashboard', url: '/' },{name: 'View', url: '/'}],
            title: 'DashBoard View',
            permission: 'dashboard-view'
        }
    },
    {
        path: 'table',
        loadComponent:() => import('./reference-consume/reusable-table/reusable-table.component').then(m=>m.ReusableTableComponent),
        canActivate: [AuthGuard],
        data: {
            breadcrumb: [{ name: 'Dashboard', url: '/' },{name: 'View', url: '/'}],
            title: 'DashBoard View',
            permission: 'dashboard-table'
        }
    },
    {
        path: 'pagination',
        loadComponent:() => import('./reference-consume/reusable-pagination/mat-pagination-consume/mat-pagination-consume.component').then(m=>m.MatPaginationConsumeComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'button',
        loadComponent:() => import('./button-reusable-consume/button-reusable-consume.component').then(m=>m.ButtonReusableConsumeComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'cache-service',
        loadComponent:() => import('./cache-service-consume/cache-service-consume.component').then(m=>m.CacheServiceConsumeComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'cache-service-multiple-calls',
        loadComponent:() => import('./cache-service-consume-multiple-calls/cache-service-consume-multiple-calls.component').then(m=>m.CacheServiceConsumeMultipleCallsComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'tooltip-directive',
        loadComponent:() => import('./tooltip-directive-consume/tooltip-directive-consume.component').then(m=>m.TooltipDirectiveConsumeComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'drag-drop',
        loadComponent:() => import('./drag and drop/cdk-drag-drop/cdk-drag-drop.component').then(m=>m.CdkDragDropComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'drag-drop-twodiv',
        loadComponent:() => import('./drag and drop/drag-and-drop-two-list/drag-and-drop-two-list.component').then(m=>m.DragAndDropTwoListComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'common-form',
        loadComponent:() => import('./common-form-consume/common-form-consume.component').then(m=>m.CommonFormConsumeComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'fork-join',
        loadComponent:() => import('./Fork-Join/fork-join/fork-join.component').then(m=>m.ForkJoinComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'left-right',
        loadComponent:() => import('./left-to-right/left-to-right.component').then(m=>m.LeftToRightComponent),
        canActivate: [AuthGuard],
    }
];


// import { Routes } from '@angular/router';
// import { AuthGuard } from '../../shared/guards/auth.guard';

// const getDashboardPath = () => {
//   const isAdmin = true;
//   const val = {
//       '':'dashboard-view'
//   }
//   return isAdmin ? 'pagination' : 'dashboard/user';
// };

// export const dashBoardRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: getDashboardPath(),
//     pathMatch: 'full'
//   },
//   {
//     path: 'dashboard/admin',
//     loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
//     canActivate: [AuthGuard],
//     data: {
//       breadcrumb: [{ name: 'Dashboard', url: '/' }],
//       title: 'DashBoard'
//     }
//   },
//   {
//     path: 'dashboard/user',
//     loadComponent: () => import('./dashboard-view/dashboard-view.component').then(m => m.DashboardViewComponent),
//     canActivate: [AuthGuard],
//     data: {
//       breadcrumb: [{ name: 'Dashboard', url: '/' }, { name: 'View', url: '/' }],
//       title: 'DashBoard View'
//     }
//   },
//   {
//     path: 'table',
//     loadComponent: () => import('./reference-consume/reusable-table/reusable-table.component').then(m => m.ReusableTableComponent),
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'pagination',
//     loadComponent: () => import('./reference-consume/reusable-pagination/mat-pagination-consume/mat-pagination-consume.component').then(m => m.MatPaginationConsumeComponent),
//     canActivate: [AuthGuard],
//   }
// ];
