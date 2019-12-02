import { Routes } from '@angular/router';


export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },

    //Apps
    {
        path: 'apps',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: './apps/apps.module#AppsModule'
            },
        ]    
    },

    //Component
    {
        path: 'components',
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: './components/general/components-general.module#ComponentsGeneralModule'
            },
            {
                path: '',
                loadChildren: './components/navigation/components-navigation.module#ComponentsNavigationModule'
            },
            {
                path: '',
                loadChildren: './components/data-entry/components-data-entry.module#ComponentsDataEntryModule'
            },
            {
                path: '',
                loadChildren: './components/data-display/components-data-display.module#ComponentsDataDisplayModule'
            },
            {
                path: '',
                loadChildren: './components/feedback/components-feedback.module#ComponentsFeedbackModule'
            },
            {
                path: '',
                loadChildren: './components/others/components-others.module#ComponentsOthersModule'
            }
        ],
        data: {
            title: 'Components '
        }
    },

    //Charts
    {
        path: 'charts',
        data: {
            title: 'Charts'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: './charts/charts.module#ChartsModule'
            },
        ]    
    },

    //Pages
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule'
            },
        ]    
    }    
];