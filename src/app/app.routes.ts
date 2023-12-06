import { Routes } from '@angular/router';
import { ReportingResolverService } from './reporting/services/reporting-resolver.service';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => import('./auth/auth.component').then(mod => mod.AuthComponent),
    },
    {
        path: 'reports',
        pathMatch: 'full',
        resolve: { resolvedData: ReportingResolverService },
        canActivate: [AuthGuard] ,
        loadComponent: () => import('./reporting/reporting.component').then(mod => mod.ReportingComponent),
    },
    {
        path:'', redirectTo:'login',pathMatch:'full'
    },
    {
        path:'**', redirectTo:'login',pathMatch:'full'
    },
];
