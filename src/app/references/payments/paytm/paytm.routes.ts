import { Routes } from '@angular/router';

export const paytmRoutes: Routes = [
    {
        path: '',
        redirectTo: 'wallet',
        pathMatch: 'full'
    },
    {
        path: 'wallet',
        loadComponent:() => import('./wallet/wallet.component').then(m=>m.WalletComponent),
        data: {
            breadcrumb: [{ label: 'Home', url: '/' }],
            title: 'Home Page'
        }
    },
    {
        path: 'member-ship',
        loadComponent:() => import('./membership/membership.component').then(m=>m.MembershipComponent)
    },
];