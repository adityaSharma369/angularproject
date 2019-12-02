import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    } 
];