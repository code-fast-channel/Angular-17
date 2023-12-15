import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: "full"
    },
    {
        path: 'login',
        loadComponent:() => import('./login/login.component').then(m=>m.LoginComponent)
    },
    {
        path: 'sign-up',
        loadComponent:() => import('./sign-up/sign-up.component').then(m=>m.SignUpComponent)
    },
];