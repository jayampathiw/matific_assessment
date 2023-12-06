import { Routes } from '@angular/router';
import { ReportingResolverService } from './reporting/services/reporting-resolver.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/auth.component').then(mod => mod.AuthComponent),
    },
    {
        path: 'reports',
        pathMatch: 'full',
        resolve: { resolvedData: ReportingResolverService },
        loadComponent: () => import('./reporting/reporting.component').then(mod => mod.ReportingComponent),
    }
];
