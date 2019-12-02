import { Routes } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
];