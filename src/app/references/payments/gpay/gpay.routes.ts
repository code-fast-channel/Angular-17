import { Routes } from '@angular/router';

export const gpayRoutes: Routes = [
    {
        path: '',
        redirectTo: 'upid',
        pathMatch: 'full'
    },
    {
        path: 'upid',
        loadComponent:() => import('./upi-id/upi-id.component').then(m=>m.UpiIdComponent),
        data: {
            breadcrumb: [{ label: 'Home', url: '/' }],
            title: 'Home Page'
        }
    },
    {
        path: 'phone-number',
        loadComponent:() => import('./phone-number/phone-number.component').then(m=>m.PhoneNumberComponent)
    },
    {
        path: 'account-transfer',
        loadComponent:() => import('./account-transfer/account-transfer.component').then(m=>m.AccountTransferComponent)
    }
];