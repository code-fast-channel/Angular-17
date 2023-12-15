import { Routes } from '@angular/router';

export const dashBoardRoutes: Routes = [
    {
        path: '',
        loadComponent:() => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
        data: {
            breadcrumb: [{ label: 'Home', url: '/' }],
            title: 'Home Page'
        }
    },
    {
        path: 'view',
        loadComponent:() => import('./dashboard-view/dashboard-view.component').then(m=>m.DashboardViewComponent)
    },
    {
        path: 'table',
        loadComponent:() => import('./reference-consume/reusable-table/reusable-table.component').then(m=>m.ReusableTableComponent)
    },
    {
        path: 'drag',
        loadComponent:() => import('./drap-drop/drap-drop.component').then(m=>m.DrapDropComponent)
    }
];