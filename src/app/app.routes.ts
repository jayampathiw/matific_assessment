import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/auth.component').then(mod => mod.AuthComponent),
    }
];
