import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.routes').then(m => m.HOME_ROUTES)
    },
    { 
        path: 'projects', 
        loadChildren: () => import('./modules/projects/projects.routes').then(m => m.PROJECTS_ROUTES) 
    }, 
    {
        path: '**',
        loadComponent: () => import('./shared/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
