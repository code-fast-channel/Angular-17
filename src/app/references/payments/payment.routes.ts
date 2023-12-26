import { Routes } from '@angular/router';

export const paymentRoutes: Routes = [
    {
        path: '',
        redirectTo: 'g-pay',
        pathMatch: 'full'
    },
    {
        path: 'g-pay',
        loadChildren:() => import('./gpay/gpay.routes').then(m=>m.gpayRoutes)
    },
    {
        path: 'paytm',
        loadChildren:() => import('./paytm/paytm.routes').then(m=>m.paytmRoutes)
    }
];